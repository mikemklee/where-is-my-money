<template>
  <h5>Category</h5>
  <Dropdown
    :modelValue="category"
    :options="categoryOptions"
    option-label="label"
    option-value="value"
    placeholder="Select one"
    @update:modelValue="onUpdate"
  />
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  category: String,
});

const categoryOptions = ref([
  { label: '변동지출', value: '변동지출' },
  { label: '비정기지출', value: '비정기지출' },
  { label: '수입', value: '수입' },
]);

const emit = defineEmits(['on-update']);

function onUpdate(newValue) {
  emit('on-update', newValue);
}
</script>

<style scoped></style>
