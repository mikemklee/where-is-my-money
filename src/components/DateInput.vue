<template>
  <div class="flex flex-col">
    <label v-if="label" :for="id" class="text-sm">{{ label }}</label>
    <input
      :id="id"
      class="border border-stone-200 h-8 px-2 outline-none"
      type="date"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";

export default {
  name: "DateInput",
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

    onMounted(() => {
      if (!props.value) {
        emit("update", new Date(Date.now()).toISOString().slice(0, 10));
      }
    });

    return {
      handleInput,
    };
  },
};
</script>
