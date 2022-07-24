<template>
  <div class="max-w-md whitespace-normal">
    {{ slotProps.data.subCategory }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  slotProps: { type: Object, required: true, default: {} },
});
</script>

<style scoped></style>
