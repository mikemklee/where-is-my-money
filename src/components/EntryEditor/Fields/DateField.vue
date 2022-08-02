<template>
  <label for="basic">Date</label>
  <Calendar id="basic" :value="date" autocomplete="off" />
</template>

<script setup>
defineProps({ date: Date });
</script>

<style scoped></style>
