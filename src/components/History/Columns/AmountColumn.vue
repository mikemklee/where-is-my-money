<template>
  <div class="max-w-md flex">
    <div class="w-1 h-full rounded-sm mr-2" :class="netIndicatorClass">
      &nbsp;
    </div>
    <div class="whitespace-normal">{{ formattedNetAmount }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  slotProps: { type: Object, required: true, default: {} },
});

const { net, amount } = props.slotProps.data;
const isExpense = net < 0;
const formattedNetAmount = `${isExpense ? '-' : ''}\$${amount}`;
const netIndicatorClass = isExpense ? 'bg-red-400' : 'bg-green-400';
</script>

<style scoped></style>
