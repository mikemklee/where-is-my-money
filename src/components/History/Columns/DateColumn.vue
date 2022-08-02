<template>
  <div class="max-w-md whitespace-normal">{{ formattedDate }}</div>
</template>

<script setup>
import { format } from 'date-fns';

const props = defineProps({
  slotProps: { type: Object, required: true, default: {} },
});

const rawDate = props.slotProps.data.date;
const formattedDate = format(rawDate, 'MMM dd, yyyy');
</script>

<style scoped></style>
