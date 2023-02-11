<template>
  <tr class="border-b border-stone-200">
    <TableDataCell>{{ transactionDate }}</TableDataCell>
    <TableDataCell>{{ transactionSource }}</TableDataCell>
    <TableDataCell>{{ transaction.description }}</TableDataCell>
    <TableDataCell>{{ transactionCategory }}</TableDataCell>
    <TableDataCell>{{ transactionAccount }}</TableDataCell>
    <TableDataCell
      :class="transactionAmountRaw < 0 ? 'text-red-700' : 'text-green-700'"
      class="text-right"
    >
      {{ transactionAmountFormatted }}
    </TableDataCell>
  </tr>
</template>

<script>
import { format } from "date-fns";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";

import TableDataCell from "@/components/TableDataCell.vue";

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
  setup(props) {
    const { categories } = useCategoriesStore();
    const { sources } = useSourcesStore();
    const { accounts } = useAccountsStore();

    const transactionDate = format(
      new Date(props.transaction.created_at),
      "MM/dd/yyyy"
    );

    const transactionAmountRaw = props.transaction.amount / 100;
    const transactionAmountFormatted = transactionAmountRaw.toLocaleString(
      "en-US",
      { style: "currency", currency: "USD" }
    );

    const transactionCategory = categories[props.transaction.category].name;
    const transactionSource = sources[props.transaction.source].name;
    const transactionAccount = accounts[props.transaction.account].name;

    return {
      transactionDate,
      transactionSource,
      transactionAmountRaw,
      transactionAmountFormatted,
      transactionCategory,
      transactionAccount,
    };
  },
};
</script>
