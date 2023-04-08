<template>
  <button @click="handleClick" :class="[buttonClass, sizeClass]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextButton",
  props: {
    size: {
      type: String,
      default: "md",
    },
  },
  emits: ["click"],
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
  computed: {
    buttonClass() {
      return "py-2 px-3 border border-gray-200 text-sm bg-gradient-to-t from-gray-100 hover:from-gray-200 transition-colors rounded";
    },
    sizeClass() {
      if (this.size === "sm") {
        return "py-[4px] px-2";
      } else {
        return "";
      }
    },
  },
});
</script>
