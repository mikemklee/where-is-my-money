<script setup lang="ts">
import { ref, onMounted } from "vue";

import { supabase } from "@/lib/supabaseClient";
import TransactionRow from "@/components/TransactionTable/TransactionRow.vue";
import TableHeaderCell from "@/components/TransactionTable/TableHeaderCell.vue";

import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";

const { getCategories } = useCategoriesStore();
const { getSources } = useSourcesStore();
const { getAccounts } = useAccountsStore();

const transactions = ref([]);

async function getTransactions() {
  const { data } = await supabase.from("transactions").select();
  transactions.value = data;
}

onMounted(() => {
  Promise.all([getCategories(), getSources(), getAccounts()]).then(() => {
    getTransactions();
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
