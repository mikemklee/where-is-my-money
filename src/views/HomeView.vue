<script setup lang="ts">
import EyesIcon from "@/components/icons/EyesIcon.vue";
import TransactionTable from "@/components/TransactionTable/TransactionTable.vue";
import FilterSelector from "@/components/FilterSelector/FilterSelector.vue";
import MyChart from "@/components/MyChart.vue";
</script>

<template>
  <main class="flex flex-col w-full">
    <div
      class="border-b border-gray-100 flex flex-col py-2 px-8 bg-gradient-to-r from-[#f9fafb]"
    >
      <h3 class="text-2xl font-bold">wimm</h3>
      <div class="flex items-center">
        <span class="mr-2 text-sm">where is my money</span>
        <EyesIcon />
      </div>
    </div>
    <div class="flex w-full h-full">
      <FilterSelector />
      <div class="p-8 mx-auto min-w-[50rem]">
        <MyChart />
        <TransactionTable />
      </div>
    </div>
  </main>
</template>
