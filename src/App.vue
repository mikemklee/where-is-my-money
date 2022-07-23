<script setup lang="ts">
import EntryEditor from "./components/EntryEditor/EntryEditor.vue";
import Header from "./components/Header.vue";
import History from "./components/History/History.vue";
</script>

<template>
  <div class="p-24 flex flex-col w-full h-full">
    <Header />
    <div class="flex">
      <History />
      <EntryEditor />
    </div>
  </div>
</template>

<style scoped>
.hide-box-shadow {
  box-shadow: none;
}
</style>
