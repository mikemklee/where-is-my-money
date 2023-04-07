<script setup>
import { ref } from "vue";
import EyesIcon from "@/components/icons/EyesIcon.vue";
import TransactionTable from "@/components/TransactionTable.vue";
import TransactionEditor from "@/components/TransactionEditor.vue";
import StyledButton from "@/components/StyledButton.vue";

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
      <StyledButton @click="addTransaction">add transaction</StyledButton>
    </div>
  </div>
  <TransactionEditor v-if="shouldShowEditor" @close="closeEditor" />
</template>
