<script setup>
import TransactionTable from "@/components/TransactionTable.vue";
</script>

<template>
  <div class="home">
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
