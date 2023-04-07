<template>
  <button
    @click="handleClick"
    class="py-1 px-2 border border-stone-200 text-sm hover:bg-stone-200 transition-colors"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "TextButton",
  emits: ["click"],
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
