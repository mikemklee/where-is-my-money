<template>
  <Card class="min-w-fit">
    <template #title><h1 class="font-semibold">New entry</h1></template>
    <template #content>
      <div class="flex flex-col">
        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="flex flex-col">
            <DateField :date="dateValRef" />
          </div>
          <div class="flex flex-col">
            <AmountField :amount="amountValueRef" />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col mb-4">
            <SourceField :source="sourceValueRef" />
          </div>
          <div class="flex flex-col mb-4">
            <TitleField :title="titleValueRef" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="flex flex-col">
            <CategoryField :category="categoryValueRef" />
          </div>
          <!-- Sub-category -->
          <div class="flex flex-col">
            <h5>Sub-category</h5>
            <Dropdown
              v-model="subCategoryValueRef"
              :options="subCategoryOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select one"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <Button label="Save" class="p-button-sm min-w-[6rem]" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AmountField from "./Fields/AmountField.vue";
import CategoryField from "./Fields/CategoryField.vue";
import DateField from "./Fields/DateField.vue";
import SourceField from "./Fields/SourceField.vue";
import TitleField from "./Fields/TitleField.vue";

const subCategoryOptions = ref([
  { label: "음식", value: "음식" },
  { label: "교통", value: "교통" },
  { label: "여가", value: "여가" },
]);

const dateValRef = ref(new Date());
const sourceValueRef = ref("");
const titleValueRef = ref("");
const amountValueRef = ref(0);
const categoryValueRef = ref(null);
const subCategoryValueRef = ref();
</script>

<style scoped></style>
