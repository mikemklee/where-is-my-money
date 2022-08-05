<template>
  <h5>Source</h5>
  <InputText
    id="source"
    :modelValue="source"
    type="text"
    class="w-full"
    placeholder="e.g. Uber"
    @update:modelValue="onUpdate"
  />
</template>

<script setup>
defineProps({
  source: String,
});

const emit = defineEmits(['on-update']);

function onUpdate(newValue) {
  emit('on-update', newValue);
}
</script>

<style scoped></style>
