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
  },
});
