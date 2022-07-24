<template>
  <Card class="mr-6 grow">
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
        <Column field="date" header="Date">
          <template #body="slotProps">
            <DateColumn :slotProps="slotProps" />
          </template>
        </Column>
        <Column field="source" header="Source">
          <template #body="slotProps">
            <SourceColumn :slotProps="slotProps" />
          </template>
        </Column>
        <Column field="title" header="Title">
          <template #body="slotProps">
            <TitleColumn :slotProps="slotProps" />
          </template>
        </Column>
        <Column field="amount" header="Amount">
          <template #body="slotProps">
            <AmountColumn :slotProps="slotProps" />
          </template>
        </Column>
        <Column field="category" header="Category">
          <template #body="slotProps">
            <CategoryColumn :slotProps="slotProps" />
          </template>
        </Column>
        <Column field="subCategory" header="Sub-category">
          <template #body="slotProps">
            <SubCategoryColumn :slotProps="slotProps" />
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup lang="ts">
import DateColumn from "./Columns/DateColumn.vue";
import SourceColumn from "./Columns/SourceColumn.vue";
import TitleColumn from "./Columns/TitleColumn.vue";
import AmountColumn from "./Columns/AmountColumn.vue";
import CategoryColumn from "./Columns/CategoryColumn.vue";
import SubCategoryColumn from "./Columns/SubCategoryColumn.vue";
const items = [
  {
    date: 1658588456123,
    source: "Longos",
    title: "닭 허벅지살 + 요거트 + 시리얼",
    net: -1,
    amount: 18.29,
    category: "변동지출",
    subCategory: "음식",
  },
  {
    date: 1658588456123,
    source: "Uber",
    title: "핀치 - 집 택시비",
    net: -1,
    amount: 16.79,
    category: "변동지출",
    subCategory: "교통",
  },
  {
    date: 1658588456123,
    source: "E-Transfer",
    title: "동기모임 카티지여행 정산",
    net: -1,
    amount: 124.0,
    category: "비정기지출",
    subCategory: "여가",
    notes:
      "yoyoyo lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const columns = [
  { field: "date", header: "Date" },
  { field: "source", header: "Source" },
  { field: "title", header: "Title" },
  { field: "amount", header: "Amount" },
  { field: "category", header: "Category" },
  { field: "subCategory", header: "Sub-category" },
];
</script>

<style scoped></style>
