<template>
  <div class="w-full h-full fixed flex flex-col">
    <div
      class="w-full h-full bg-[#c7c7c7] opacity-75 absolute"
      @click="$emit('close')"
    />
    <div
      class="border border-stone-200 max-w-2xl mx-auto max-h-2xl my-auto flex flex-col bg-[#fffbfe]"
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

      <div>
        <button @click="$emit('close')">Cancel</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
