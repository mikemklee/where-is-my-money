<script setup lang="ts">
import EyesIcon from "@/components/icons/EyesIcon.vue";
import TransactionTable from "@/components/TransactionTable/TransactionTable.vue";
import FilterSelector from "@/components/FilterSelector/FilterSelector.vue";
</script>

<template>
  <main class="flex w-full">
    <div class="bg-[#f9fafb] h-full w-80 border border-r-gray-100">
      <FilterSelector />
    </div>
    <div class="px-8 mx-auto my-12 min-w-[50rem]">
      <div class="mb-4">
        <h1 class="text-3xl font-bold">wimm</h1>
        <div class="flex items-center">
          <span class="mr-2">where is my money</span>
          <EyesIcon />
        </div>
      </div>
      <TransactionTable />
    </div>
  </main>
</template>
