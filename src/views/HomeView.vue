<script setup>
import TransactionTable from "@/components/TransactionTable.vue";
import EyesIcon from "@/components/icons/EyesIcon.vue";
</script>

<template>
  <div class="mx-auto my-auto min-w-[50rem]">
    <div class="mb-4">
      <h1 class="text-3xl font-bold">wimm</h1>
      <div class="flex items-center">
        <span class="mr-2">where is my money</span>
        <EyesIcon />
      </div>
    </div>
    <TransactionTable />
  </div>
</template>
