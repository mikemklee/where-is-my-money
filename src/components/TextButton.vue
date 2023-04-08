<template>
  <button
    @click="handleClick"
    class="py-2 px-3 border border-gray-200 text-sm bg-gradient-to-t from-gray-100 hover:from-gray-200 transition-colors rounded"
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
