<template>
  <component
    :is="fieldComponent"
    :id="id"
    :label="label"
    :value="typedValue"
    :options="options"
    :disabled="disabled"
    :min="min"
    :max="max"
    :step="step"
    @update="handleUpdate"
  />
</template>

<script lang="ts">
import TextInput from "@/components/TextInput.vue";
import SelectInput from "@/components/SelectInput.vue";
import NumberInput from "@/components/NumberInput.vue";

export default {
  name: "FormField",
  components: {
    TextInput,
    SelectInput,
    NumberInput,
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
      type: [String, Number],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    // props for SelectInput:
    options: {
      type: Array,
      default: () => [],
    },
    // props for NumberInput:
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
  emits: ["update"],
  computed: {
    fieldComponent(): string {
      switch (this.type) {
        case "select":
          return "SelectInput";
        case "number":
          return "NumberInput";
        default:
          return "TextInput";
      }
    },
    typedValue(): string | number {
      if (this.type === "number") {
        return Number(this.value);
      }
      return this.value;
    },
  },
  setup(props, { emit }) {
    const handleUpdate = (value: string | number) => {
      emit("update", value);
    };

    return {
      handleUpdate,
    };
  },
};
</script>
