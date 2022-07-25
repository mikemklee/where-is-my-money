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

<script setup lang="ts">
import { CATEGORIES } from "../../../constants/categories";

const props = defineProps({
  slotProps: { type: Object, required: true, default: {} },
});

const { category: categoryKey } = props.slotProps.data;

const { label, color } = CATEGORIES[categoryKey];
</script>

<style scoped></style>
