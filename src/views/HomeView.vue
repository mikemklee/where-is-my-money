<script setup lang="ts">
import { ref } from "vue";
import EyesIcon from "@/components/icons/EyesIcon.vue";
import TransactionTable from "@/components/TransactionTable/TransactionTable.vue";
import TransactionEditor from "@/components/TransactionEditor/TransactionEditor.vue";
import TextButton from "@/components/TextButton.vue";
import FilterSelector from "@/components/FilterSelector/FilterSelector.vue";

async function addTransaction() {
  openEditor();
}

function openEditor() {
  shouldShowEditor.value = true;
}

function closeEditor() {
  shouldShowEditor.value = false;
}

const shouldShowEditor = ref(false);
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
      <div v-if="shouldShowEditor" class="my-4">
        <TransactionEditor @close="closeEditor" />
      </div>
      <div v-else class="flex justify-between my-4">
        <TextButton @click="addTransaction">Add transaction</TextButton>
      </div>
      <TransactionTable />
    </div>
  </main>
</template>
