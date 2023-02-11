import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useCategoriesStore = defineStore("categories", {
  state: () => {
    return { categories: {} };
  },
  actions: {
    async getCategories() {
      const { data } = await supabase.from("categories").select();

      data.forEach((category) => {
        this.categories[category.id] = category;
      });
    },
  },
});
