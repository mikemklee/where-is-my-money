<template>
  <label for="basic">Date</label>
  <Calendar
    id="basic"
    :modelValue="date"
    autocomplete="off"
    :showTime="false"
    dateFormat="M dd, yy"
    @date-select="onDateSelect"
  />
</template>

<script setup>
defineProps({ date: Date });

const emit = defineEmits(['on-update']);

function onDateSelect(newValue) {
  emit('on-update', newValue);
}
</script>

<style scoped></style>
