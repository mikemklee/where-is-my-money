import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useAccountsStore = defineStore("accounts", {
  state: () => {
    return { accounts: {} };
  },
  actions: {
    async getAccounts() {
      const { data } = await supabase.from("accounts").select();
      data.forEach((account) => {
        this.accounts[account.id] = account;
      });
    },
    async addAccount(name: string) {
      const { data, error } = await supabase
        .from("accounts")
        .insert({ name: name })
        .select();
      if (error) {
        console.error(error);
        return;
      }
      this.accounts[data[0].id] = data[0];
    },
  },
});
