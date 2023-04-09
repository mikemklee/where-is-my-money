<template>
  <button
    @click="handleClick"
    class="py-2 px-3 min-w-[80px] border text-sm transition-colors rounded"
    :class="[sizeClass, color, styleClass]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextButton",
  props: {
    size: {
      type: String,
      default: "md",
    },
    color: {
      type: String,
      default: "teal",
    },
    fill: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
  computed: {
    sizeClass() {
      if (this.size === "sm") {
        return "py-[4px] px-2 min-w-[60px]";
      } else {
        return "";
      }
    },
    styleClass() {
      if (this.fill) {
        return "fill";
      } else {
        return "";
      }
    },
  },
});
</script>

<style scoped>
.red {
  @apply border-red-600 text-red-600;
}

.red.fill {
  @apply bg-red-600 text-white;
}

.teal {
  @apply border-primary text-primary;
}
.teal.fill {
  @apply bg-primary text-white;
}

/* Add any other color classes as needed */
</style>
