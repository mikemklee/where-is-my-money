<template>
  <div
    class="whitespace-nowrap border border-gray-200 rounded px-4 py-1 text-sm mr-2 mb-2 bg-gradient-to-tr from-gray-100 cursor-pointer hover:from-gray-200 transition-all"
    :class="{ 'border-gray-500': selected }"
    @click="onSelect"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tag",
  props: {
    label: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["select"],
  methods: {
    onSelect() {
      this.$emit("select");
    },
  },
});
</script>
