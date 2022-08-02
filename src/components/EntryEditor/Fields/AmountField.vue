<template>
  <label for="currency-us">Amount</label>
  <InputNumber
    id="currency-us"
    :value="amount"
    mode="currency"
    currency="USD"
    locale="en-US"
  />
</template>

<script setup>
defineProps({
  amount: Number,
});
</script>

<style scoped></style>
