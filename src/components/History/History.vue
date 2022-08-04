<template>
  <Card class="mr-6 grow">
    <template #title>
      <h1 class="font-semibold">History</h1>
    </template>
    <template #content>
      <DataTable
        :value="historyStore.history"
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

<script>
import DateColumn from './Columns/DateColumn.vue';
import SourceColumn from './Columns/SourceColumn.vue';
import TitleColumn from './Columns/TitleColumn.vue';
import AmountColumn from './Columns/AmountColumn.vue';
import CategoryColumn from './Columns/CategoryColumn.vue';
import SubCategoryColumn from './Columns/SubCategoryColumn.vue';

import { useHistoryStore } from '../../store';

export default {
  components: {
    DateColumn,
    SourceColumn,
    TitleColumn,
    AmountColumn,
    CategoryColumn,
    SubCategoryColumn,
  },
  setup() {
    const historyStore = useHistoryStore();

    return { historyStore };
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    getHistory() {
      this.historyStore.getHistory();
    },
  },
};
</script>

<style scoped></style>
