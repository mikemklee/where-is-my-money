<script setup lang="ts">
import { onMounted, ref } from "vue";

import TextButton from "@/components/TextButton.vue";
import TransactionEditor from "@/components/TransactionEditor/TransactionEditor.vue";
import TableHeaderCell from "@/components/TransactionTable/TableHeaderCell.vue";
import TransactionRow from "@/components/TransactionTable/TransactionRow.vue";

import { useAccountsStore } from "@/stores/accounts";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useTransactionsStore } from "@/stores/transactions";
import { storeToRefs } from "pinia";

const { getCategories } = useCategoriesStore();
const { getSources } = useSourcesStore();
const { getAccounts } = useAccountsStore();

const transactionStore = useTransactionsStore();
const { transactions } = storeToRefs(transactionStore);

onMounted(() => {
  Promise.all([getCategories(), getSources(), getAccounts()]).then(() => {
    // load with no filters
    transactionStore.getTransactions();
  });
});

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
  <div v-if="shouldShowEditor" class="my-4">
    <TransactionEditor @close="closeEditor" />
  </div>
  <div v-else class="flex justify-between mb-4 items-center">
    <h3 class="text-lg font-semibold">Transactions</h3>
    <TextButton @click="addTransaction">Add transaction</TextButton>
  </div>
  <table class="w-full border-collapse">
    <thead class="">
      <tr class="text-left border-b border-stone-400">
        <TableHeaderCell>Date</TableHeaderCell>
        <TableHeaderCell>Source</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
        <TableHeaderCell>Category</TableHeaderCell>
        <TableHeaderCell>Account</TableHeaderCell>
        <TableHeaderCell class="text-right">Amount</TableHeaderCell>
      </tr>
    </thead>
    <tbody>
      <TransactionRow
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </tbody>
  </table>
</template>
