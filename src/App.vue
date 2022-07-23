<script setup lang="ts">
import { ref } from "vue";
const items = [
  {
    date: 1658588456123,
    source: "Longos",
    title: "닭 허벅지살 + 요거트 + 시리얼",
    net: -1,
    amount: 18.29,
    category: "변동지출",
    "sub-category": "음식",
    notes: "닭 620g, 요거트 500g, 시리얼 300g, 다이제 1통 (다이제 맛있음)",
  },
  {
    date: 1658588456123,
    source: "Uber",
    title: "핀치 - 집 택시비",
    net: -1,
    amount: 16.79,
    category: "변동지출",
    "sub-category": "교통",
    notes: "",
  },
  {
    date: 1658588456123,
    source: "E-Transfer",
    title: "동기모임 카티지여행 정산",
    net: -1,
    amount: 124.0,
    category: "비정기지출",
    "sub-category": "여가",
    notes: "",
  },
];
const columns = [
  { field: "date", header: "Date" },
  { field: "source", header: "Source" },
  { field: "title", header: "Title" },
  { field: "amount", header: "Amount" },
  { field: "category", header: "Category" },
  { field: "sub-category", header: "Sub-category" },
  { field: "notes", header: "Notes" },
];

const dateValRef = ref();
const sourceValueRef = ref();
const titleValueRef = ref();
const amountValueRef = ref(0);
</script>

<template>
  <div class="p-12 flex">
    <Card class="mr-6 min-w-fit">
      <template #title><h1 class="font-semibold">New item</h1></template>
      <template #content>
        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-2">
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
          <div class="flex flex-col">
            <!-- Source -->
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
            <!-- Title -->
            <div class="flex flex-col">
              <h5>Title</h5>
              <span class="p-float-label">
                <InputText
                  id="title"
                  type="text"
                  v-model="titleValueRef"
                  class="w-full"
                />
              </span>
              <small id="title-help">e.g. trip from Downtown to home</small>
            </div>
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
          autoLayout
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
