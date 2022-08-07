<template>
  <div class="flex">
    <AppLogo />
    <div class="ml-auto flex flex-col w-56">
      <label for="range">Data between:</label>
      <Calendar
        id="range"
        v-model="rangeValRef"
        autocomplete="off"
        selectionMode="range"
        :manualInput="false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { startOfMonth, endOfMonth } from 'date-fns';
import AppLogo from './AppLogo.vue';

const today = new Date();
const firstDayOfMonth = startOfMonth(today);
const lastDayOfMonth = endOfMonth(today);

const rangeValRef = ref([firstDayOfMonth, lastDayOfMonth]);

// TODO: persist this in store, so it can be used as a global filter
</script>

<style scoped></style>
