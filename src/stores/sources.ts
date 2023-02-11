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
  },
});
