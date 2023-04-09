import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  created_at: string;
  account: number;
  category: number;
  source: number;
}

interface TransactionRecords {
  [id: number]: Transaction;
}

export interface TransactionsState {
  transactions: TransactionRecords;
}

export const useTransactionsStore = defineStore("transactions", {
  state: (): TransactionsState => ({ transactions: {} }),
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
      const transactions: TransactionRecords = {};
      data.forEach((transaction) => {
        transactions[transaction.id] = transaction as Transaction;
      });

      this.transactions = transactions;
    },
    async addTransaction(transactionData: Object) {
      const { data, error } = await supabase
        .from("transactions")
        .insert(transactionData)
        .select();

      if (error) {
        console.error(error);
        return;
      }

      const transaction = data[0] as Transaction;
      this.transactions[transaction.id] = transaction;
    },
    async editTransaction(transactionId: number, transactionData: Object) {
      const { data, error } = await supabase
        .from("transactions")
        .update(transactionData)
        .eq("id", transactionId)
        .select();

      if (error) {
        console.error(error);
        return;
      }

      const transaction = data[0] as Transaction;
      this.transactions[transaction.id] = transaction;
    },
    async deleteTransaction(transactionId: number) {
      const { error } = await supabase
        .from("transactions")
        .delete()
        .eq("id", transactionId);

      if (error) {
        console.error(error);
        return;
      }

      delete this.transactions[transactionId];
    },
  },
});
