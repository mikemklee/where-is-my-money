<template>
  <h5>Source</h5>
  <InputText
    id="source"
    :value="source"
    type="text"
    class="w-full"
    placeholder="e.g. Uber"
  />
</template>

<script setup>
defineProps({
  source: String,
});
</script>

<style scoped></style>
