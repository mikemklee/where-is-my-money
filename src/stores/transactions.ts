import { defineStore, acceptHMRUpdate } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useTransactionsStore = defineStore("transactions", {
  state: () => {
    return { transactions: {} };
  },
  actions: {
    async getTransactions(filters = {}) {
      const { categories, accounts, sources } = filters;

      let query = supabase.from("transactions").select();

      if (categories?.length > 0) {
        query = query.in("category", categories);
      }
      if (accounts?.length > 0) {
        query = query.in("account", accounts);
      }
      if (sources?.length > 0) {
        query = query.in("source", sources);
      }

      const { data, error } = await query;

      if (error) {
        console.error(error);
        return;
      }

      // populate transactions
      const transactions = {};
      data.forEach((transaction) => {
        transactions[transaction.id] = transaction;
      });

      this.transactions = transactions;
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

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useTransactionsStore, import.meta.hot)
  );
}
