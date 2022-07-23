<script setup lang="ts">
import { ref } from "vue";
const items = [
  {
    date: 1658588456123,
    source: "Longos",
    title: "닭 허벅지살 + 요거트 + 시리얼",
    income: 0,
    expense: 18.29,
    category: "변동지출",
    "sub-category": "음식",
    notes: "닭 600g, 요거트 500g, 시리얼 300g",
  },
  {
    date: 1658588456123,
    source: "Uber",
    title: "핀치 - 집 택시비",
    income: 0,
    expense: 16.79,
    category: "변동지출",
    "sub-category": "교통",
    notes: "",
  },
  {
    date: 1658588456123,
    source: "E-Transfer",
    title: "동기모임 카티지여행 정산",
    income: 0,
    expense: 124.0,
    category: "비정기지출",
    "sub-category": "여가",
    notes: "",
  },
];
const columns = [
  { field: "date", header: "Date" },
  { field: "source", header: "Source" },
  { field: "title", header: "Title" },
  { field: "income", header: "Income" },
  { field: "expense", header: "Expense" },
  { field: "category", header: "Category" },
  { field: "sub-category", header: "Sub-category" },
  { field: "notes", header: "Notes" },
];

const sourceValueRef = ref();
const titleValueRef = ref();
const incomeOrExpenseValueRef = ref("Expense");
const incomeOrExpenseOptionsRef = ref(["Expense", "Income"]);
const amountValueRef = ref(0);
</script>

<template>
  <div class="p-12">
    <Card class="mb-6">
      <template #title><h1 class="font-semibold">New item</h1></template>
      <template #content>
        <div class="grid grid-cols-4 gap-4 mb-4">
          <div class="flex flex-col">
            <h5>Source</h5>
            <span class="p-float-label">
              <InputText
                id="source"
                type="text"
                v-model="sourceValueRef"
                class="w-full"
              />
            </span>
            <small id="source-help">e.g. Uber</small>
          </div>
          <div class="flex flex-col">
            <h5>Title</h5>
            <span class="p-float-label">
              <InputText id="title" type="text" v-model="titleValueRef" class="w-full" />
            </span>
            <small id="title-help">e.g. trip from Downtown to home</small>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mb-4">
          <div class="flex flex-col">
            <h5>Type</h5>
            <SelectButton
              v-model="incomeOrExpenseValueRef"
              :options="incomeOrExpenseOptionsRef"
              class="hide-box-shadow"
            />
          </div>
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

        <div class="flex justify-end">
          <Button label="Add" class="p-button-sm" />
        </div>
      </template>
    </Card>
    <Card>
      <template #title>
        <h1 class="font-semibold">History</h1>
      </template>
      <template #content>
        <DataTable
          :value="items"
          showGridlines
          resizableColumns
          columnResizeMode="fit"
          responsiveLayout="scroll"
          class="p-datatable-sm"
        >
          <Column
            v-for="col of columns"
            :field="col.field"
            :header="col.header"
            :key="col.field"
            class="text-sm"
          />
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.hide-box-shadow {
  box-shadow: none;
}
</style>
