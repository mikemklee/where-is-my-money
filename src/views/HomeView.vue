<script setup>
import TransactionTable from "@/components/TransactionTable.vue";
import EyesIcon from "@/components/icons/EyesIcon.vue";

async function addTransaction() {
  console.log("add transaction");
}
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
    <div class="flex justify-between mt-2">
      <button
        @click="addTransaction"
        class="py-1 px-2 border border-stone-200 text-sm hover:bg-stone-200 transition-colors"
      >
        add transaction
      </button>
    </div>
  </div>
</template>
