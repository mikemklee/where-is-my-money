<template>
  <h5>Title</h5>
  <InputText
    id="title"
    type="text"
    v-model="title"
    v-on:update:modelValue="onUpdate"
    class="w-full"
    placeholder="e.g. trip from Downtown to the home"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();

const emit = defineEmits(["onUpdate"]);

function onUpdate(newValue: any) {
  emit("onUpdate", newValue);
}
</script>

<style scoped></style>
