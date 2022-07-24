<template>
  <h5>Sub-category</h5>
  <Dropdown
    v-model="subCategory"
    :options="subCategoryOptions"
    optionLabel="label"
    optionValue="value"
    placeholder="Select one"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  subCategory: string | null;
}>();

const subCategoryOptions = ref([
  { label: "음식", value: "음식" },
  { label: "교통", value: "교통" },
  { label: "여가", value: "여가" },
]);
</script>

<style scoped></style>
