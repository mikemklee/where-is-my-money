<template>
  <div class="flex flex-col">
    <label v-if="label" :for="id" class="text-sm">{{ label }}</label>
    <input
      :id="id"
      class="border border-stone-200 h-8 px-2 outline-none rounded"
      type="text"
      :value="value"
      size="1"
      @input="handleInput"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "TextInput",
  emits: ["update"],
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
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    function handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      emit("update", target.value);
    }

    return {
      handleInput,
    };
  },
};
</script>
