<template>
  <div class="mt-auto flex justify-end">
    <span>
      Made with ☕ by &nbsp;
      <a href="https://github.com/leemun1" target="_blank">@leemun1</a>
    </span>
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
