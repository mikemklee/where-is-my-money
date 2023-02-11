<script setup>
import TransactionTable from "@/components/TransactionTable.vue";
</script>

<template>
  <div class="home">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <TransactionTable />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
