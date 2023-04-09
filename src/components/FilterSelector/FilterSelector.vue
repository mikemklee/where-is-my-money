<template>
  <div class="py-14 px-8 flex flex-col gap-y-6">
    <FilterGroup
      v-if="categoriesLoaded"
      title="Categories"
      :filters="categories"
      :selectedFilters="categoryFilters"
      @select="(id) => onSelectFilter(id, 'categories')"
    />

    <FilterGroup
      v-if="sourcesLoaded"
      title="Sources"
      :filters="sources"
      :selectedFilters="sourceFilters"
      @select="(id) => onSelectFilter(id, 'sources')"
    />

    <FilterGroup
      v-if="accountsLoaded"
      title="Accounts"
      :filters="accounts"
      :selectedFilters="accountFilters"
      @select="(id) => onSelectFilter(id, 'accounts')"
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
    const { categories } = useCategoriesStore();
    const { sources } = useSourcesStore();
    const { accounts } = useAccountsStore();
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
    };
  },
};
</script>
