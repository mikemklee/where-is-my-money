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

<script setup>
import DateColumn from './Columns/DateColumn.vue';
import SourceColumn from './Columns/SourceColumn.vue';
import TitleColumn from './Columns/TitleColumn.vue';
import AmountColumn from './Columns/AmountColumn.vue';
import CategoryColumn from './Columns/CategoryColumn.vue';
import SubCategoryColumn from './Columns/SubCategoryColumn.vue';
const items = [
  {
    date: 1658588456123,
    source: 'Longos',
    title: '닭 허벅지살 + 요거트 + 시리얼',
    net: -1,
    amount: 18.29,
    category: 'variable_expense',
    subCategory: '음식',
  },
  {
    date: 1658588456123,
    source: 'Kijiji',
    title: 'Nikon DSLR 카메라 판매',
    net: 1,
    amount: 240,
    category: 'variable_income',
    subCategory: '중고거래',
  },
  {
    date: 1658588456123,
    source: 'Uber',
    title: '핀치 - 집 택시비',
    net: -1,
    amount: 16.79,
    category: 'variable_expense',
    subCategory: '교통',
  },
  {
    date: 1658588456123,
    source: 'E-Transfer',
    title: '동기모임 카티지여행 정산',
    net: -1,
    amount: 124.0,
    category: 'other_expense',
    subCategory: '여가',
  },
];
</script>

<style scoped></style>
