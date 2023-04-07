<template>
  <div class="w-full h-full fixed flex flex-col">
    <div
      class="w-full h-full bg-[#c7c7c7] opacity-75 absolute"
      @click="handleClose"
    />
    <div
      class="border border-stone-200 max-w-2xl mx-auto max-h-2xl my-auto flex flex-col bg-[#fffbfe] rounded p-8"
    >
      <div class="flex flex-col gap-y-2">
        <TextInput
          label="Date"
          :value="form.date"
          @update="handleFormUpdate('date', $event)"
        />
        <TextInput
          label="Source"
          :value="form.source"
          @update="handleFormUpdate('source', $event)"
        />
        <TextInput
          label="Description"
          :value="form.description"
          @update="handleFormUpdate('description', $event)"
        />
        <TextInput
          label="Category"
          :value="form.category"
          @update="handleFormUpdate('category', $event)"
        />
        <TextInput
          label="Account"
          :value="form.account"
          @update="handleFormUpdate('account', $event)"
        />
        <TextInput
          label="Amount"
          :value="form.amount"
          @update="handleFormUpdate('amount', $event)"
        />
      </div>

      <div class="flex justify-between mt-4">
        <TextButton @click="handleClose">Cancel</TextButton>
        <TextButton @click="handleSave">Save</TextButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import TextButton from "@/components/TextButton.vue";
import TextInput from "@/components/TextInput.vue";

export default {
  components: {
    TextButton,
    TextInput,
  },
  setup(_, { emit }) {
    const form = ref({
      date: "",
      source: "",
      description: "",
      category: "",
      account: "",
      amount: "",
    });

    const handleClose = () => {
      emit("close");
    };

    const handleSave = () => {
      console.log("form data", form.value);
      handleClose();
    };

    const handleFormUpdate = (
      field: keyof typeof form.value,
      value: string
    ) => {
      form.value[field] = value;
    };

    return {
      form,
      handleFormUpdate,
      handleClose,
      handleSave,
    };
  },
};
</script>
