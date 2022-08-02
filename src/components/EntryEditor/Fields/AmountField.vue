<template>
  <label for="currency-us">Amount</label>
  <InputNumber
    id="currency-us"
    v-model="amount"
    mode="currency"
    currency="USD"
    locale="en-US"
  />
</template>

<script setup>
defineProps<{
  amount: number;
}>();
</script>

<style scoped></style>
