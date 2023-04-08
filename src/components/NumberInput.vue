<template>
  <div class="flex flex-col">
    <label v-if="label" :for="id" class="text-sm">{{ label }}</label>
    <input
      :id="id"
      class="border border-stone-200 h-8 px-2 outline-none rounded"
      type="number"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberInput",
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
      type: Number,
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    step: {
      type: Number,
      default: null,
    },
  },
  setup(props, { emit }) {
    function handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      const newValue = target.valueAsNumber;
      emit("update", isNaN(newValue) ? null : newValue);
    }

    return {
      handleInput,
    };
  },
};
</script>
