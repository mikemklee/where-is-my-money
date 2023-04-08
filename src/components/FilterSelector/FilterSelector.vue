<template>
  <div class="py-14 px-8">
    <div v-if="categoriesLoaded">
      <label class="font-semibold text-sm">Categories</label>
      <div class="flex flex-wrap">
        <div
          v-for="category in categories"
          :key="category.id"
          @click="onSelectCategoryFilter(category.id)"
          class="whitespace-nowrap border border-gray-100 rounded px-4 py-1 text-sm mr-2 mb-2 bg-gradient-to-tr from-gray-100 cursor-pointer hover:from-gray-200 transition-all"
          :class="{
            'border-gray-500': categoryFilters.has(category.id),
          }"
        >
          {{ category.name }}
        </div>
      </div>
    </div>

    <div v-if="sourcesLoaded" class="mt-4">
      <label class="font-semibold text-sm">Sources</label>
      <div class="flex flex-wrap">
        <div
          v-for="source in sources"
          :key="source.id"
          @click="onSelectSourceFilter(source.id)"
          class="border border-gray-100 rounded px-4 py-1 text-sm mr-2 mb-2 bg-gradient-to-tr from-gray-100 cursor-pointer hover:from-gray-200 transition-all"
          :class="{
            'border-gray-500': sourceFilters.has(source.id),
          }"
        >
          {{ source.name }}
        </div>
      </div>
    </div>

    <div v-if="accountsLoaded" class="mt-4">
      <label class="font-semibold text-sm">Accounts</label>
      <div class="flex flex-wrap">
        <div
          v-for="account in accounts"
          :key="account.id"
          @click="onSelectAccountFilter(account.id)"
          class="whitespace-nowrap border border-gray-100 rounded px-4 py-1 text-sm mr-2 mb-2 bg-gradient-to-tr from-gray-100 cursor-pointer hover:from-gray-200 transition-all"
          :class="{
            'border-gray-500': accountFilters.has(account.id),
          }"
        >
          {{ account.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from "vue";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";
import { useTransactionsStore } from "@/stores/transactions";

export default {
  name: "FilterSelector",
  setup() {
    const { categories } = useCategoriesStore();
    const { sources } = useSourcesStore();
    const { accounts } = useAccountsStore();
    const { getTransactions } = useTransactionsStore();

    const categoryFilters = reactive(new Set());
    const sourceFilters = reactive(new Set());
    const accountFilters = reactive(new Set());

    const categoriesLoaded = computed(
      () => Object.values(categories).length > 0
    );
    const sourcesLoaded = computed(() => Object.values(sources).length > 0);
    const accountsLoaded = computed(() => Object.values(accounts).length > 0);

    const handleFilterSelection = async () => {
      const filters = {
        categories: [...categoryFilters],
        sources: [...sourceFilters],
        accounts: [...accountFilters],
      };

      await getTransactions(filters);
    };

    const onSelectCategoryFilter = (categoryId: number) => {
      if (categoryFilters.has(categoryId)) {
        categoryFilters.delete(categoryId);
      } else {
        categoryFilters.add(categoryId);
      }
      handleFilterSelection();
    };

    const onSelectSourceFilter = (sourceId: number) => {
      if (sourceFilters.has(sourceId)) {
        sourceFilters.delete(sourceId);
      } else {
        sourceFilters.add(sourceId);
      }
      handleFilterSelection();
    };

    const onSelectAccountFilter = (accountId: number) => {
      if (accountFilters.has(accountId)) {
        accountFilters.delete(accountId);
      } else {
        accountFilters.add(accountId);
      }
      handleFilterSelection();
    };

    return {
      categories,
      categoriesLoaded,
      sources,
      sourcesLoaded,
      accounts,
      accountsLoaded,
      categoryFilters,
      onSelectCategoryFilter,
      sourceFilters,
      onSelectSourceFilter,
      accountFilters,
      onSelectAccountFilter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
