<template>
  <div class="max-w-md whitespace-normal">
    <span
      :style="{
        backgroundColor: color,
      }"
      class="px-2 rounded-md"
    >
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    slotProps: { type: Object, required: true, default: () => {} },
  },
  computed: {
    label() {
      return this.slotProps.data.category;
    },
    color() {
      return this.slotProps.data.category.color;
    },
  },
};
</script>

<style scoped></style>
