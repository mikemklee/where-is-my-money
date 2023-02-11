<template>
  <tr>
    <td>{{ transactionDate }}</td>
    <td>{{ transaction.source }}</td>
    <td>{{ transaction.description }}</td>
    <td>{{ transaction.amount }}</td>
    <td>{{ transactionCategory }}</td>
    <td>{{ transaction.account }}</td>
  </tr>
</template>

<script>
import { format } from "date-fns";
import { useCategoriesStore } from "@/stores/categories";

export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { categories } = useCategoriesStore();

    const transactionDate = format(
      new Date(props.transaction.created_at),
      "MM/dd/yyyy"
    );

    const transactionCategory = categories[props.transaction.category].name;

    return {
      transactionDate,
      transactionCategory,
    };
  },
};
</script>

<style lang="scss" scoped></style>
