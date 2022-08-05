<template>
  <Card class="min-w-fit">
    <template #title><h1 class="font-semibold">New entry</h1></template>
    <template #content>
      <div class="flex flex-col">
        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="flex flex-col">
            <DateField :date="dateValue" @on-update="updateDate" />
          </div>
          <div class="flex flex-col">
            <AmountField :amount="amountValue" @on-update="updateAmount" />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col mb-4">
            <SourceField :source="sourceValue" @on-update="updateSource" />
          </div>
          <div class="flex flex-col mb-4">
            <TitleField :title="titleValue" @on-update="updateTitle" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="flex flex-col">
            <CategoryField
              :category="categoryValue"
              @on-update="updateCategory"
            />
          </div>
          <div class="flex flex-col">
            <SubCategoryField
              :sub-category="subCategoryValue"
              @on-update="updateSubCategory"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <Button
          label="Save"
          class="p-button-sm min-w-[6rem]"
          @click="saveEntry"
        />
      </div>
    </template>
  </Card>
</template>

<script>
import AmountField from './Fields/AmountField.vue';
import CategoryField from './Fields/CategoryField.vue';
import DateField from './Fields/DateField.vue';
import SourceField from './Fields/SourceField.vue';
import SubCategoryField from './Fields/SubCategoryField.vue';
import TitleField from './Fields/TitleField.vue';
import { useHistoryStore } from '../../store';

export default {
  components: {
    AmountField,
    CategoryField,
    DateField,
    SourceField,
    SubCategoryField,
    TitleField,
  },
  setup() {
    const historyStore = useHistoryStore();
    return {
      historyStore,
    };
  },
  data() {
    return {
      dateValue: new Date(),
      amountValue: 0,
      sourceValue: '',
      titleValue: '',
      categoryValue: '',
      subCategoryValue: '',
    };
  },
  methods: {
    updateDate(newValue) {
      this.dateValue = newValue;
    },
    updateAmount(newValue) {
      this.amountValue = newValue;
    },
    updateSource(newValue) {
      this.sourceValue = newValue;
    },
    updateTitle(newValue) {
      this.titleValue = newValue;
    },
    updateCategory(newValue) {
      this.categoryValue = newValue;
    },
    updateSubCategory(newValue) {
      this.subCategoryValue = newValue;
    },
    saveEntry() {
      this.historyStore.saveEntry({
        date: this.dateValue,
        amount: this.amountValue,
        source: this.sourceValue,
        title: this.titleValue,
        category: this.categoryValue,
        subCategory: this.subCategoryValue,
      });
    },
  },
};
</script>

<style scoped></style>
