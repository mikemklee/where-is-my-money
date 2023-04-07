<!-- Field.vue -->
<template>
  <component
    :is="fieldComponent"
    :id="id"
    :label="label"
    :value="value"
    :options="options"
    @update="handleUpdate"
  />
</template>

<script lang="ts">
import TextInput from "@/components/TextInput.vue";
import SelectInput from "@/components/SelectInput.vue";

export default {
  name: "FormField",
  components: {
    TextInput,
    SelectInput,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update"],
  computed: {
    fieldComponent() {
      return this.type === "select" ? "SelectInput" : "TextInput";
    },
  },
  setup(props, { emit }) {
    const handleUpdate = (value: string) => {
      emit("update", value);
    };

    return {
      handleUpdate,
    };
  },
};
</script>
