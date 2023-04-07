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
        <FormField
          v-for="field in formSchema"
          :key="field.id"
          :id="field.id"
          :label="field.label"
          :value="form[field.id]"
          :type="field.type"
          :options="field.options"
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
import FormField from "@/components/FormField.vue";

interface Schema {
  id: string;
  label: string;
  type?: "text" | "select";
  options?: Array<{ label: string; value: string }>;
}

type FormData = Record<Schema["id"], string>;

export default {
  components: {
    TextButton,
    FormField,
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

    const formSchema: Schema[] = [
      {
        id: "date",
        label: "Date",
        type: "text",
      },
      {
        id: "source",
        label: "Source",
        type: "select",
      },
      {
        id: "description",
        label: "Description",
        type: "text",
      },
      {
        id: "category",
        label: "Category",
        type: "select",
      },
      {
        id: "account",
        label: "Account",
        type: "select",
        options: [
          { label: "Cash", value: "cash" },
          { label: "Credit Card", value: "credit-card" },
        ],
      },
      {
        id: "amount",
        label: "Amount",
        type: "text",
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
