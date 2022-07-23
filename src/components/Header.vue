<template>
  <div class="flex">
    <div class="grow mb-8 ml-2">
      <h1 class="italic text-5xl">WIMM</h1>
      <h1 class="italic font-light text-xl">Where is my money?</h1>
    </div>
    <div class="flex flex-col w-56">
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

<script setup lang="ts">
import { ref } from "vue";
import { startOfMonth, endOfMonth } from "date-fns";

const today = new Date();
const firstDayOfMonth = startOfMonth(today);
const lastDayOfMonth = endOfMonth(today);

const rangeValRef = ref([firstDayOfMonth, lastDayOfMonth]);

// TODO: persist this in store, so it can be used as a global filter
</script>

<style scoped></style>
