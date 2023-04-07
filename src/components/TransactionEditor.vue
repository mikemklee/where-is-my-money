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
import { ref, computed } from "vue";
import TextButton from "@/components/TextButton.vue";
import FormField from "@/components/FormField.vue";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";

interface FieldSchema {
  id: string;
  label: string;
  type?: "text" | "select" | "number";
  options?: Array<{ label: string; value: string }>;
}

type FormData = Record<FieldSchema["id"], string>;

export default {
  components: {
    TextButton,
    FormField,
  },
  setup(_, { emit }) {
    const { categories } = useCategoriesStore();
    const { sources } = useSourcesStore();
    const { accounts } = useAccountsStore();

    const categoryOptions = computed(() =>
      Object.values(categories).map((category) => ({
        label: category.name,
        value: category.id,
      }))
    );

    const sourceOptions = computed(() =>
      Object.values(sources).map((source) => ({
        label: source.name,
        value: source.id,
      }))
    );

    const accountOptions = computed(() =>
      Object.values(accounts).map((account) => ({
        label: account.name,
        value: account.id,
      }))
    );

    const form = ref<FormData>({
      date: "",
      source: "",
      description: "",
      category: "",
      account: "",
      amount: "",
    });

    const formSchema: FieldSchema[] = [
      {
        id: "date",
        label: "Date",
        type: "text",
      },
      {
        id: "source",
        label: "Source",
        type: "select",
        options: sourceOptions.value,
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
        options: categoryOptions.value,
      },
      {
        id: "account",
        label: "Account",
        type: "select",
        options: accountOptions.value,
      },
      {
        id: "amount",
        label: "Amount",
        type: "number",
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
