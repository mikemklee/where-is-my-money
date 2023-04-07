<template>
  <div class="flex flex-col">
    <label v-if="label" :for="inputId" class="text-sm">{{ label }}</label>
    <input
      :id="inputId"
      class="border border-stone-200 py-[2px] px-2"
      type="text"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  name: "TextInput",
  emits: ["update"],
  props: {
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
    const inputId = computed(() => props.label.toLowerCase());

    function handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      emit("update", target.value);
    }

    return {
      inputId,
      handleInput,
    };
  },
};
</script>
