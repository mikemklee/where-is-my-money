<template>
  <tr
    class="border-b border-gray-200 hover:bg-gray-100 hover:cursor-pointer"
    @click="handleClick"
  >
    <TableDataCell>{{ transactionDate }}</TableDataCell>
    <TableDataCell>{{ transactionSource }}</TableDataCell>
    <TableDataCell>{{ transaction.description }}</TableDataCell>
    <TableDataCell>{{ transactionCategory }}</TableDataCell>
    <TableDataCell>{{ transactionAccount }}</TableDataCell>
    <TableDataCell
      :class="transactionAmountRaw < 0 ? 'text-red-600' : 'text-primary'"
      class="text-right"
    >
      {{ transactionAmountFormatted }}
    </TableDataCell>
  </tr>
</template>

<script lang="ts">
import { computed } from "vue";
import { format } from "date-fns";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";

import TableDataCell from "@/components/TransactionTable/TableDataCell.vue";

export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  components: {
    TableDataCell,
  },
  setup(props, { emit }) {
    const { categories } = useCategoriesStore();
    const { sources } = useSourcesStore();
    const { accounts } = useAccountsStore();

    const transactionDate = computed(() =>
      format(new Date(props.transaction.created_at), "yyyy/MM/dd")
    );

    const transactionAmountRaw = computed(() => props.transaction.amount / 100);
    const transactionAmountFormatted = computed(() =>
      transactionAmountRaw.value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
    );
    const transactionCategory = computed(
      () => categories[props.transaction.category].name
    );
    const transactionSource = computed(
      () => sources[props.transaction.source].name
    );
    const transactionAccount = computed(
      () => accounts[props.transaction.account].name
    );

    const handleClick = () => {
      emit("edit", props.transaction.id);
    };

    return {
      transactionDate,
      transactionSource,
      transactionAmountRaw,
      transactionAmountFormatted,
      transactionCategory,
      transactionAccount,
      handleClick,
    };
  },
};
</script>
