import { defineStore } from "pinia";
import { supabase } from "@/lib/supabaseClient";

export const useSourcesStore = defineStore("sources", {
  state: () => {
    return { sources: {} };
  },
  actions: {
    async getSources() {
      const { data } = await supabase.from("sources").select();

      data.forEach((source) => {
        this.sources[source.id] = source;
      });
    },
    async addSource(name: string) {
      const { data, error } = await supabase
        .from("sources")
        .insert({ name: name })
        .select();

      if (error) {
        console.error(error);
        return;
      }

      this.sources[data[0].id] = data[0];
    },
  },
});
