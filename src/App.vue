<script setup>
import { ref, onMounted } from "vue";

import { supabase } from "./lib/supabaseClient";
import TransactionRow from "./components/TransactionRow.vue";

import { useCategoriesStore } from "@/stores/categories";

const { getCategories } = useCategoriesStore();

const transactions = ref([]);

async function getTransactions() {
  const { data } = await supabase.from("transactions").select();
  transactions.value = data;
}

onMounted(() => {
  Promise.all([getCategories()]).then(() => {
    getTransactions();
  });
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Source</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Account</th>
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

<style scoped></style>
