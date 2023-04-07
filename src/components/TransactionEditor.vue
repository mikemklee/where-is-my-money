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
          v-for="field in formSchema"
          :key="field.id"
          :id="field.id"
          :label="field.label"
          :value="form[field.id]"
          @update="handleFormUpdate(field.id, $event)"
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

interface FormField {
  id: string;
  label: string;
}

type FormData = Record<FormField["id"], string>;

export default {
  components: {
    TextButton,
    TextInput,
  },
  setup(_, { emit }) {
    const form = ref<FormData>({
      date: "",
      source: "",
      description: "",
      category: "",
      account: "",
      amount: "",
    });

    const formSchema: FormField[] = [
      {
        id: "date",
        label: "Date",
      },
      {
        id: "source",
        label: "Source",
      },
      {
        id: "description",
        label: "Description",
      },
      {
        id: "category",
        label: "Category",
      },
      {
        id: "account",
        label: "Account",
      },
      {
        id: "amount",
        label: "Amount",
      },
    ];

    const handleClose = () => {
      emit("close");
    };

    const handleSave = () => {
      console.log("form data", form.value);
      handleClose();
    };

    const handleFormUpdate = (field: keyof FormData, value: string) => {
      form.value[field] = value;
    };

    return {
      form,
      formSchema,
      handleFormUpdate,
      handleClose,
      handleSave,
    };
  },
};
</script>
