<template>
  <div class="py-14 px-8">
    <div v-if="categoriesLoaded">
      <div>
        <label class="font-semibold text-sm">Categories</label>
        <TextButton size="sm" @click="onClickManageCategories"
          >Manage</TextButton
        >
      </div>
      <div class="flex flex-wrap">
        <Tag
          v-for="category in categories"
          :key="category.id"
          :label="category.name"
          :selected="categoryFilters.has(category.id)"
          @select="onSelectCategoryFilter(category.id)"
        />
      </div>
    </div>

    <div v-if="sourcesLoaded" class="mt-4">
      <label class="font-semibold text-sm">Sources</label>
      <div class="flex flex-wrap">
        <Tag
          v-for="source in sources"
          :key="source.id"
          :label="source.name"
          :selected="sourceFilters.has(source.id)"
          @select="onSelectSourceFilter(source.id)"
        />
      </div>
    </div>

    <div v-if="accountsLoaded" class="mt-4">
      <label class="font-semibold text-sm">Accounts</label>
      <div class="flex flex-wrap">
        <Tag
          v-for="account in accounts"
          :key="account.id"
          :label="account.name"
          :selected="accountFilters.has(account.id)"
          @select="onSelectAccountFilter(account.id)"
        />
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

import Tag from "@/components/FilterSelector/Tag.vue";
import TextButton from "@/components/TextButton.vue";

export default {
  name: "FilterSelector",
  components: {
    Tag,
    TextButton,
  },
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

    const onClickManageCategories = () => {
      console.log("onCLickManageCategories");
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
      onClickManageCategories,
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
