<template>
  <div class="max-w-md whitespace-normal">{{ formattedDate }}</div>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: {
    slotProps: { type: Object, required: true, default: () => {} },
  },
  computed: {
    formattedDate() {
      const rawDate = this.slotProps.data.date;

      return format(rawDate, 'MMM dd, yyyy');
    },
  },
};
</script>

<style scoped></style>
