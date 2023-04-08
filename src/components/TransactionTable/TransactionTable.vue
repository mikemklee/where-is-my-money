<script setup lang="ts">
import { onMounted } from "vue";

import TransactionRow from "@/components/TransactionTable/TransactionRow.vue";
import TableHeaderCell from "@/components/TransactionTable/TableHeaderCell.vue";

import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";
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
</script>

<template>
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
