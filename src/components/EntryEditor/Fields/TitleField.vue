<template>
  <h5>Title</h5>
  <InputText
    id="title"
    :value="title"
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

const emit = defineEmits(['onUpdate']);

function onUpdate(newValue) {
  emit('onUpdate', newValue);
}
</script>

<style scoped></style>
