<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
const items = [
  {
    date: 1658588456123,
    source: "Longos",
    title: "닭 허벅지살 + 요거트 + 시리얼",
    net: -1,
    amount: 18.29,
    category: "변동지출",
    "sub-category": "음식",
  },
  {
    date: 1658588456123,
    source: "Uber",
    title: "핀치 - 집 택시비",
    net: -1,
    amount: 16.79,
    category: "변동지출",
    "sub-category": "교통",
  },
  {
    date: 1658588456123,
    source: "E-Transfer",
    title: "동기모임 카티지여행 정산",
    net: -1,
    amount: 124.0,
    category: "비정기지출",
    "sub-category": "여가",
  },
];
const columns = [
  { field: "date", header: "Date" },
  { field: "source", header: "Source" },
  { field: "title", header: "Title" },
  { field: "amount", header: "Amount" },
  { field: "category", header: "Category" },
  { field: "sub-category", header: "Sub-category" },
];

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

const dateValRef = ref();
const sourceValueRef = ref();
const titleValueRef = ref();
const amountValueRef = ref(0);
const categoryValueRef = ref();
const subCategoryValueRef = ref();
</script>

<template>
  <div class="p-24 flex flex-col w-full h-full">
    <Header />

    <div class="flex">
      <Card class="mr-6 min-w-fit">
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
      <Card class="grow">
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
  </div>
</template>

<style scoped>
.hide-box-shadow {
  box-shadow: none;
}
</style>
