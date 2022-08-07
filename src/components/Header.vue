<template>
  <div class="flex">
    <AppLogo />
    <div class="ml-auto flex flex-col">
      <Profile />
      <div class="my-4 flex justify-end items-center">
        <label class="mr-2" for="range">Data between:</label>
        <Calendar
          id="range"
          v-model="rangeValRef"
          class="w-[13rem]"
          autocomplete="off"
          selectionMode="range"
          :manualInput="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { endOfMonth, startOfMonth } from 'date-fns';
import { ref } from 'vue';
import AppLogo from './AppLogo.vue';
import Profile from './Profile.vue';

const today = new Date();
const firstDayOfMonth = startOfMonth(today);
const lastDayOfMonth = endOfMonth(today);

const rangeValRef = ref([firstDayOfMonth, lastDayOfMonth]);

// TODO: persist this in store, so it can be used as a global filter
</script>

<style scoped></style>
