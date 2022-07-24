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
        <Column field="date" header="date">
          <template #body="slotProps">
            <div class="max-w-md whitespace-normal">
              {{ slotProps.data.date }}
            </div>
          </template>
        </Column>
        <Column field="source" header="source">
          <template #body="slotProps">
            <div class="max-w-md whitespace-normal">
              {{ slotProps.data.source }}
            </div>
          </template>
        </Column>
        <Column field="title" header="title">
          <template #body="slotProps">
            <div class="max-w-md whitespace-normal">
              {{ slotProps.data.title }}
            </div>
          </template>
        </Column>
        <Column field="amount" header="amount">
          <template #body="slotProps">
            <div class="max-w-md whitespace-normal">
              {{ slotProps.data.amount }}
            </div>
          </template>
        </Column>
        <Column field="category" header="category">
          <template #body="slotProps">
            <div class="max-w-md whitespace-normal">
              {{ slotProps.data.category }}
            </div>
          </template>
        </Column>
        <Column field="subCategory" header="subCategory">
          <template #body="slotProps">
            <div class="max-w-md whitespace-normal">
              {{ slotProps.data.subCategory }}
            </div>
          </template>
        </Column>
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
