<template>
  <div class="max-w-md flex">
    <div class="w-1 h-full rounded-sm mr-2" :class="netIndicatorClass">
      &nbsp;
    </div>
    <div class="whitespace-normal">{{ formattedNetAmount }}</div>
  </div>
</template>

<script>
export default {
  props: {
    slotProps: { type: Object, required: true, default: () => {} },
  },
  computed: {
    isExpense() {
      const { net } = this.slotProps.data;
      return net < 0;
    },
    formattedNetAmount() {
      const { amount: amountInCents } = this.slotProps.data;
      const dollarAmount = amountInCents / 100;
      return `${this.isExpense ? '-' : ''}$${dollarAmount}`;
    },
    netIndicatorClass() {
      return this.isExpense ? 'bg-red-400' : 'bg-green-400';
    },
  },
};
</script>

<style scoped></style>
