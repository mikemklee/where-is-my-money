<template>
  <div class="py-14 px-8">
    <div v-if="categoriesLoaded">
      <label class="font-semibold text-sm">Categories</label>
      <div class="flex flex-wrap">
        <div
          v-for="category in categories"
          :key="category.id"
          class="whitespace-nowrap border border-gray-100 rounded px-4 py-1 text-sm mr-2 mb-2 bg-gradient-to-tr from-gray-100 cursor-pointer hover:from-gray-200 transition-all"
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
          class="border border-gray-100 rounded px-4 py-1 text-sm mr-2 mb-2 bg-gradient-to-tr from-gray-100 cursor-pointer hover:from-gray-200 transition-all"
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
          class="whitespace-nowrap border border-gray-100 rounded px-4 py-1 text-sm mr-2 mb-2 bg-gradient-to-tr from-gray-100 cursor-pointer hover:from-gray-200 transition-all"
        >
          {{ account.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";

export default {
  name: "FilterSelector",
  setup() {
    const { categories } = useCategoriesStore();
    const { sources } = useSourcesStore();
    const { accounts } = useAccountsStore();

    const categoriesLoaded = computed(
      () => Object.values(categories).length > 0
    );
    const sourcesLoaded = computed(() => Object.values(sources).length > 0);
    const accountsLoaded = computed(() => Object.values(accounts).length > 0);

    return {
      categories,
      categoriesLoaded,
      sources,
      sourcesLoaded,
      accounts,
      accountsLoaded,
    };
  },
};
</script>

<style lang="scss" scoped></style>
