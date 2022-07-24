<template>
  <h5>Title</h5>
  <InputText
    id="title"
    type="text"
    v-model="title"
    class="w-full"
    placeholder="e.g. trip from Downtown to the home"
  />
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
