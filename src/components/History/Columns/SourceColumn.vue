<template>
  <div class="max-w-md whitespace-normal">
    {{ slotProps.data.source }}
  </div>
</template>

<script setup>
const props = defineProps({
  slotProps: { type: Object, required: true, default: () => {} },
});
</script>

<style scoped></style>
