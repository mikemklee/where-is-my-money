<script setup>
import { ref, onMounted } from "vue";

import { supabase } from "./lib/supabaseClient";

const transactions = ref([]);

async function getTransactions() {
  const { data } = await supabase.from("transactions").select();
  transactions.value = data;
}

onMounted(() => {
  getTransactions();
});
</script>

<template>
  <ul>
    <li v-for="transaction in transactions" :key="transaction.id">
      {{ transaction.description }}
    </li>
  </ul>
</template>

<style scoped></style>
