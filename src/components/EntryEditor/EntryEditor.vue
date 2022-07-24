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
          <!-- Source -->
          <div class="flex flex-col mb-4">
            <SourceField :source="sourceValueRef" />
          </div>
          <!-- Title -->
          <div class="flex flex-col mb-4">
            <h5>Title</h5>
            <InputText
              id="title"
              type="text"
              v-model="titleValueRef"
              class="w-full"
              placeholder="e.g. trip from Downtown to the home"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <!-- Category -->
          <div class="flex flex-col">
            <h5>Category</h5>
            <Dropdown
              v-model="categoryValueRef"
              :options="categoryOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select one"
            />
          </div>
          <!-- Sub-category -->
          <div class="flex flex-col">
            <h5>Sub-category</h5>
            <Dropdown
              v-model="subCategoryValueRef"
              :options="subCategoryOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select one"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <Button label="Save" class="p-button-sm min-w-[6rem]" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AmountField from "./Fields/AmountField.vue";
import DateField from "./Fields/DateField.vue";
import SourceField from "./Fields/SourceField.vue";

const categoryOptions = ref([
  { label: "변동지출", value: "변동지출" },
  { label: "비정기지출", value: "비정기지출" },
  { label: "수입", value: "수입" },
]);

const subCategoryOptions = ref([
  { label: "음식", value: "음식" },
  { label: "교통", value: "교통" },
  { label: "여가", value: "여가" },
]);

const dateValRef = ref(new Date());
const sourceValueRef = ref();
const titleValueRef = ref();
const amountValueRef = ref(0);
const categoryValueRef = ref();
const subCategoryValueRef = ref();
</script>

<style scoped></style>
