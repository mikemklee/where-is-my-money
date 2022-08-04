<template>
  <Card class="min-w-fit">
    <template #title><h1 class="font-semibold">New entry</h1></template>
    <template #content>
      <div class="flex flex-col">
        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="flex flex-col">
            <DateField :date="dateValRef" />
          </div>
          <div class="flex flex-col">
            <AmountField :amount="amountValueRef" />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col mb-4">
            <SourceField :source="sourceValueRef" />
          </div>
          <div class="flex flex-col mb-4">
            <TitleField :title="titleValueRef" @on-update="updateTitle" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="flex flex-col">
            <CategoryField :category="categoryValueRef" />
          </div>
          <div class="flex flex-col">
            <SubCategoryField :sub-category="subCategoryValueRef" />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <Button
          label="Save"
          class="p-button-sm min-w-[6rem]"
          @click="saveEntry"
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

import AmountField from './Fields/AmountField.vue';
import CategoryField from './Fields/CategoryField.vue';
import DateField from './Fields/DateField.vue';
import SourceField from './Fields/SourceField.vue';
import SubCategoryField from './Fields/SubCategoryField.vue';
import TitleField from './Fields/TitleField.vue';
import { useHistoryStore } from '../../store';

const dateValRef = ref(new Date());
const sourceValueRef = ref('');
const titleValueRef = ref('');
const amountValueRef = ref(0);
const categoryValueRef = ref(null);
const subCategoryValueRef = ref(null);

const historyStore = useHistoryStore();

async function saveEntry() {
  console.log('--- saving new entry ---');
  console.log('title?', titleValueRef.value);
  historyStore.saveEntry(titleValueRef.value);
}

function updateTitle(newValue) {
  titleValueRef.value = newValue;
}
</script>

<style scoped></style>
