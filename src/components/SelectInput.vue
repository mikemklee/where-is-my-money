<template>
  <div class="flex flex-col">
    <label v-if="label" :for="id" class="text-sm">{{ label }}</label>
    <select
      :id="id"
      class="border border-stone-200 h-8 px-2 outline-none"
      :value="value"
      @change="handleChange"
      :disabled="disabled"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: "SelectInput",
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
    options: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    function handleChange(event: Event) {
      const target = event.target as HTMLSelectElement;
      emit("update", target.value);
    }

    return {
      handleChange,
    };
  },
};
</script>
