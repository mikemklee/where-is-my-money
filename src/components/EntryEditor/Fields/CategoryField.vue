<template>
  <h5>Category</h5>
  <Dropdown
    v-model="category"
    :options="categoryOptions"
    optionLabel="label"
    optionValue="value"
    placeholder="Select one"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  category: string | null;
}>();

const categoryOptions = ref([
  { label: "변동지출", value: "변동지출" },
  { label: "비정기지출", value: "비정기지출" },
  { label: "수입", value: "수입" },
]);
</script>

<style scoped></style>
