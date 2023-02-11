<template>
  <tr>
    <td>{{ transactionDate }}</td>
    <td>{{ transaction.source }}</td>
    <td>{{ transaction.description }}</td>
    <td>{{ transaction.amount }}</td>
    <td>{{ transaction.category }}</td>
    <td>{{ transaction.account }}</td>
  </tr>
</template>

<script>
import { format } from "date-fns";
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props.transaction);

    const transactionDate = format(
      new Date(props.transaction.created_at),
      "MM/dd/yyyy"
    );
    return {
      transactionDate,
    };
  },
};
</script>

<style lang="scss" scoped></style>
