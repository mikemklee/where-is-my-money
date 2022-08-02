<script setup>
import EntryEditor from './components/EntryEditor/EntryEditor.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import History from './components/History/History.vue';
</script>

<template>
  <div class="p-24 flex flex-col w-full h-full">
    <Header />
    <div class="flex">
      <History />
      <EntryEditor />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
