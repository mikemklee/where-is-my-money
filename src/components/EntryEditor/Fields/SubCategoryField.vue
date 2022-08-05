<template>
  <h5>Sub-category</h5>
  <Dropdown
    :modelValue="subCategory"
    :options="subCategoryOptions"
    option-label="label"
    option-value="value"
    placeholder="Select one"
    @update:modelValue="onUpdate"
  />
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  subCategory: String,
});

const subCategoryOptions = ref([
  { label: '음식', value: '음식' },
  { label: '교통', value: '교통' },
  { label: '여가', value: '여가' },
]);

const emit = defineEmits(['on-update']);

function onUpdate(newValue) {
  emit('on-update', newValue);
}
</script>

<style scoped></style>
