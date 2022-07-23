<template>
  <Card class="min-w-fit">
    <template #title><h1 class="font-semibold">New item</h1></template>
    <template #content>
      <div class="flex flex-col">
        <div class="grid grid-cols-2 gap-2 mb-4">
          <!-- Date -->
          <div class="flex flex-col">
            <label for="basic">Date</label>
            <Calendar id="basic" v-model="dateValRef" autocomplete="off" />
          </div>
          <!-- Amount -->
          <div class="flex flex-col">
            <label for="currency-us">Amount</label>
            <InputNumber
              id="currency-us"
              v-model="amountValueRef"
              mode="currency"
              currency="USD"
              locale="en-US"
            />
          </div>
        </div>
        <div class="flex flex-col mb-4">
          <!-- Source -->
          <div class="flex flex-col">
            <h5>Source</h5>
            <InputText
              id="source"
              type="text"
              v-model="sourceValueRef"
              class="w-full"
              placeholder="e.g. Uber"
            />
          </div>
          <!-- Title -->
          <div class="flex flex-col">
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
              placeholder="Select a category"
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
              placeholder="Select a sub-category"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <Button label="Add" class="p-button-sm" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
