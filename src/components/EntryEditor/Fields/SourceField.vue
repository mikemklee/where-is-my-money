<template>
  <h5>Source</h5>
  <InputText
    id="source"
    type="text"
    v-model="source"
    class="w-full"
    placeholder="e.g. Uber"
  />
</template>

<script setup>
defineProps<{
  source: string;
}>();
</script>

<style scoped></style>
