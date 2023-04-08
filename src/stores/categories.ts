import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export interface Category {
  id: number;
  name: string;
}

interface CategoriesState {
  categories: Record<number, Category>;
}

export const useCategoriesStore = defineStore("categories", {
  state: (): CategoriesState => {
    return { categories: {} };
  },
  actions: {
    async getCategories() {
      const { data } = await supabase.from("categories").select();

      data.forEach((category) => {
        this.categories[category.id] = category;
      });
    },
    async addCategory(categoryName: string) {
      const { data, error } = await supabase
        .from("categories")
        .insert({ name: categoryName })
        .select();

      if (error) {
        console.error(error);
        return;
      }

      this.categories[data[0].id] = data[0];
    },
  },
});
