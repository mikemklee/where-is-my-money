<template>
  <label for="currency-us">Amount</label>
  <InputNumber
    id="currency-us"
    :modelValue="amount"
    mode="currency"
    currency="USD"
    locale="en-US"
    @update:modelValue="onUpdate"
  />
</template>

<script setup>
defineProps({
  amount: Number,
});

const emit = defineEmits(['on-update']);

function onUpdate(newValue) {
  emit('on-update', newValue);
}
</script>

<style scoped></style>
