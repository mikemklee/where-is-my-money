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
</template>

<script setup lang="ts">
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
