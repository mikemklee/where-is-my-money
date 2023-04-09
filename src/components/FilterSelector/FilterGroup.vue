<template>
  <div>
    <div class="flex items-center mb-2">
      <label class="font-semibold opacity-80 text-sm mr-2">{{ title }}</label>
      <div
        @click="toggleTagEditor"
        class="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <v-icon name="pr-cog" />
      </div>
    </div>
    <div
      v-if="state.shouldShowEditor"
      class="border-l-2 border-gray-200 my-4 p-3 flex items-center"
    >
      <TextInput
        :value="state.name"
        @update="handleUpdateName"
        placeholder="New name"
        class="grow mr-2"
      />
      <TextButton size="sm" @click="handleSaveTag">Save</TextButton>
    </div>
    <div class="flex flex-wrap">
      <Tag
        v-for="filter in filters"
        :key="filter.id"
        :label="filter.name"
        :selected="selectedFilters.has(filter.id)"
        @select="onSelectFilter(filter.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";
import Tag from "@/components/FilterSelector/Tag.vue";
import TextInput from "@/components/TextInput.vue";
import TextButton from "@/components/TextButton.vue";

export default defineComponent({
  name: "FilterGroup",
  components: {
    Tag,
    TextInput,
    TextButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    filters: {
      type: Object,
      required: true,
    },
    selectedFilters: {
      type: Set,
      required: true,
    },
  },
  setup(props, { emit }) {
    function toggleTagEditor() {
      tagEditorState.shouldShowEditor = !tagEditorState.shouldShowEditor;
    }

    const tagEditorState = reactive({
      shouldShowEditor: false,
      name: "",
    });

    const handleUpdateName = (value: string) => {
      tagEditorState.name = value;
    };

    const handleSaveTag = () => {
      emit("add", tagEditorState.name);
      tagEditorState.shouldShowEditor = false;
      tagEditorState.name = "";
    };

    const onSelectFilter = (filterId: number) => {
      emit("select", filterId);
    };

    return {
      onSelectFilter,
      toggleTagEditor,
      state: tagEditorState,
      handleUpdateName,
      handleSaveTag,
    };
  },
});
</script>

<style scoped></style>
