<template>
  <h5>Title</h5>
  <InputText
    id="title"
    :modelValue="title"
    type="text"
    class="w-full"
    placeholder="e.g. trip from Downtown to the home"
    @update:modelValue="onUpdate"
  />
</template>

<script setup>
const props = defineProps({
  title: String,
});

const emit = defineEmits(['on-update']);

function onUpdate(newValue) {
  emit('on-update', newValue);
}
</script>

<style scoped></style>
