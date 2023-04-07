<template>
  <div class="w-full h-full fixed flex flex-col">
    <div
      class="w-full h-full bg-[#c7c7c7] opacity-75 absolute"
      @click="handleClose"
    />
    <div
      class="border border-stone-200 max-w-2xl mx-auto max-h-2xl my-auto flex flex-col bg-[#fffbfe] rounded p-8"
    >
      <div>
        <label for="date">Date:</label>
        <input type="text" name="date" id="date" />
      </div>
      <div>
        <label for="source">Source:</label>
        <input type="text" name="source" id="source" />
      </div>
      <div>
        <label for="description">Description:</label>
        <input type="text" name="description" id="description" />
      </div>
      <div>
        <label for="category">Category:</label>
        <input type="text" name="category" id="category" />
      </div>
      <div>
        <label for="account">Account:</label>
        <input type="text" name="account" id="account" />
      </div>
      <div>
        <label for="amount">Amount:</label>
        <input type="text" name="amount" id="amount" />
      </div>

      <div class="flex justify-between mt-2">
        <TextButton @click="handleClose">Cancel</TextButton>
        <TextButton @click="handleClose">Save</TextButton>
      </div>
    </div>
  </div>
</template>

<script>
import TextButton from "@/components/TextButton.vue";
export default {
  components: {
    TextButton,
  },
  setup(_, { emit }) {
    const handleClose = () => {
      emit("close");
    };

    return {
      handleClose,
    };
  },
};
</script>

<style lang="scss" scoped></style>
