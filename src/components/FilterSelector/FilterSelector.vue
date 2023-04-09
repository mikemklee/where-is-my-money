<template>
  <div
    class="p-8 flex flex-col gap-y-4 bg-[#f9fafb] h-full w-80 border-r border-gray-100"
  >
    <span class="font-semibold">Filters</span>
    <FilterGroup
      v-if="accountsLoaded"
      title="Accounts"
      :filters="accounts"
      :selectedFilters="accountFilters"
      @select="(id) => onSelectFilter(id, 'accounts')"
      @add="(name) => onAddFilter(name, 'accounts')"
    />
    <FilterGroup
      v-if="sourcesLoaded"
      title="Sources"
      :filters="sources"
      :selectedFilters="sourceFilters"
      @select="(id) => onSelectFilter(id, 'sources')"
      @add="(name) => onAddFilter(name, 'sources')"
    />
    <FilterGroup
      v-if="categoriesLoaded"
      title="Categories"
      :filters="categories"
      :selectedFilters="categoryFilters"
      @select="(id) => onSelectFilter(id, 'categories')"
      @add="(name) => onAddFilter(name, 'categories')"
    />
  </div>
</template>

<script lang="ts">
import { computed, reactive } from "vue";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";
import { useTransactionsStore } from "@/stores/transactions";

import FilterGroup from "./FilterGroup.vue";

type FilterType = "categories" | "sources" | "accounts";

export default {
  name: "FilterSelector",
  components: {
    FilterGroup,
  },
  setup() {
    const { categories, addCategory } = useCategoriesStore();
    const { sources, addSource } = useSourcesStore();
    const { accounts, addAccount } = useAccountsStore();
    const { getTransactions } = useTransactionsStore();

    const categoryFilters = reactive(new Set<number>());
    const sourceFilters = reactive(new Set<number>());
    const accountFilters = reactive(new Set<number>());

    const filterSets = reactive({
      categories: categoryFilters,
      sources: sourceFilters,
      accounts: accountFilters,
    });

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

    const onSelectFilter = (filterId: number, filterType: FilterType) => {
      const filterSet: Set<number> = filterSets[filterType];
      if (filterSet.has(filterId)) {
        filterSet.delete(filterId);
      } else {
        filterSet.add(filterId);
      }
      handleFilterSelection();
    };

    const onAddFilter = (name: string, filterType: FilterType) => {
      if (filterType === "categories") {
        addCategory(name);
      } else if (filterType === "sources") {
        addSource(name);
      } else if (filterType === "accounts") {
        addAccount(name);
      }
    };

    return {
      categories,
      categoriesLoaded,
      sources,
      sourcesLoaded,
      accounts,
      accountsLoaded,
      categoryFilters,
      sourceFilters,
      accountFilters,
      onSelectFilter,
      onAddFilter,
    };
  },
};
</script>
