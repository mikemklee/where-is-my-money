<template>
  <tr>
    <td>{{ transactionDate }}</td>
    <td>{{ transactionSource }}</td>
    <td>{{ transaction.description }}</td>
    <td :class="transactionAmountRaw < 0 ? 'text-red-700' : 'text-green-700'">
      {{ transactionAmountFormatted }}
    </td>
    <td>{{ transactionCategory }}</td>
    <td>{{ transactionAccount }}</td>
  </tr>
</template>

<script>
import { format } from "date-fns";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";

export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
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
