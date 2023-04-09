<template>
  <v-chart class="h-64" :option="option" />
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";
import { storeToRefs } from "pinia";

import { useTransactionsStore } from "@/stores/transactions";
import { computed } from "@vue/reactivity";

const transactionStore = useTransactionsStore();
const { transactions, orderedTransactions } = storeToRefs(transactionStore);

import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";

const { categories } = useCategoriesStore();
const { sources } = useSourcesStore();
const { accounts } = useAccountsStore();

const chartData = computed(() => {
  // Create an object to hold the total amount for each category
  const categoryAmounts = {};
  for (const categoryId in categories) {
    categoryAmounts[categoryId] = 0;
  }

  // Add up the total amount for each category from the transactions
  for (const transaction of orderedTransactions.value) {
    const category = categories[transaction.category];
    if (category && transaction.amount < 0) {
      categoryAmounts[transaction.category] += transaction.amount;
    }
  }

  // Convert the category amounts to the format required by the chart
  const chartData = [];
  for (const categoryId in categoryAmounts) {
    const category = categories[categoryId];
    const amount = categoryAmounts[categoryId];
    if (category && amount < 0) {
      chartData.push({
        name: category.name,
        value: Math.abs(amount / 100),
      });
    }
  }

  return chartData;
});

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const option = ref({
  title: {
    text: "Expenses by Category",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  // legend: {
  //   orient: "vertical",
  //   left: "left",
  //   data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  // },
  series: [
    {
      name: "Expenses by Category",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
      data: chartData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>
