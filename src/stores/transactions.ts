import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useTransactionsStore = defineStore("transactions", {
  state: () => {
    return { transactions: {} };
  },
  actions: {
    async getTransactions() {
      const { data } = await supabase.from("transactions").select();

      data.forEach((transaction) => {
        this.transactions[transaction.id] = transaction;
      });
    },
    async addTransaction(transactionData) {
      const { data, error } = await supabase
        .from("transactions")
        .insert(transactionData)
        .select();

      if (error) {
        console.error(error);
        return;
      }

      this.transactions[data[0].id] = data[0];
    },
  },
});
