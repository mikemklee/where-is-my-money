<template>
  <div class="h-64 w-full flex">
    <v-chart class="h-full w-full flex-1" :option="expensesByCategory" />
    <v-chart class="h-full w-full flex-1" :option="expensesBySource" />
  </div>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart } from "echarts/charts";

import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { useTransactionsStore } from "@/stores/transactions";
import { computed } from "vue";

const transactionStore = useTransactionsStore();
const { orderedTransactions } = storeToRefs(transactionStore);

import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";

const { categories } = useCategoriesStore();
const { sources } = useSourcesStore();

const expensesByCategoryChartData = computed(() => {
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

const expensesBySourceChartData = computed(() => {
  // Create an object to hold the total amount for each source
  const sourceAmounts = {};
  for (const sourceId in sources) {
    sourceAmounts[sourceId] = 0;
  }

  // Add up the total amount for each source from the transactions
  for (const transaction of orderedTransactions.value) {
    const source = sources[transaction.source];
    if (source && transaction.amount < 0) {
      sourceAmounts[transaction.source] += transaction.amount;
    }
  }

  // Convert the source amounts to the format required by the chart
  const chartData = [];
  for (const sourceId in sourceAmounts) {
    const source = sources[sourceId];
    const amount = sourceAmounts[sourceId];
    if (source && amount < 0) {
      chartData.push({
        name: source.name,
        value: Math.abs(amount / 100),
      });
    }
  }

  return chartData;
});

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

// TODO: allow each category to be given a color, and use that instead
const colors = [
  "#b88c8c", //	(184,140,140)
  "#9fb9bf", //	(159,185,191)
  "#d6c7c7", //	(214,199,199)
  "#aec8ce", //	(174,200,206)
  "#ddadad", //	(221,173,173)
];

const expensesByCategory = ref({
  title: {
    text: "Expenses by Category",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : ${c}",
  },
  series: [
    {
      name: "Expenses by Category",
      type: "bar",
      data: expensesByCategoryChartData,
      itemStyle: {
        color: (params) => colors[params.dataIndex % colors.length],
      },
      label: {
        show: true,
        position: "insideLeft",
        formatter: "{b} : ${c}",
      },
    },
  ],
  yAxis: {
    type: "category",
    data: expensesByCategoryChartData.value.map((data) => data.name),
  },
  xAxis: {
    type: "value",
  },
});

const expensesBySource = ref({
  title: {
    text: "Expenses by Source",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : ${c}",
  },
  series: [
    {
      name: "Expenses by Source",
      type: "bar",
      data: expensesBySourceChartData,
      itemStyle: {
        color: (params) => colors[params.dataIndex % colors.length],
      },
      label: {
        show: true,
        position: "insideLeft",
        formatter: "{b} : ${c}",
      },
    },
  ],
  yAxis: {
    type: "category",
    data: expensesBySourceChartData.value.map((data) => data.name),
  },
  xAxis: {
    type: "value",
  },
});
</script>
