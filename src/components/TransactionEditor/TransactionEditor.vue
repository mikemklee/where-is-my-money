<template>
  <div class="border border-gray-100 my-6 flex flex-col rounded p-4">
    <h3 class="font-semibold text-lg mb-4">Add transaction</h3>
    <div class="flex flex-col gap-y-2">
      <div class="grid grid-cols-2 gap-2">
        <FormField
          id="created_at"
          label="Date"
          type="date"
          :value="form['date']"
          @update="handleFormUpdate('date', $event)"
        />
        <FormField
          id="amount"
          label="Amount"
          type="number"
          :value="form['amount']"
          @update="handleFormUpdate('amount', $event)"
        />
      </div>
      <div class="grid grid-cols-3 gap-2">
        <FormField
          id="account"
          label="Account"
          type="select"
          :options="accountOptions"
          :value="form['account']"
          @update="handleFormUpdate('account', $event)"
        />
        <FormField
          id="source"
          label="Source"
          type="select"
          :options="sourceOptions"
          :value="form['source']"
          @update="handleFormUpdate('source', $event)"
        />
        <FormField
          id="category"
          label="Category"
          type="select"
          :options="categoryOptions"
          :value="form['category']"
          @update="handleFormUpdate('category', $event)"
        />
      </div>
      <div class="grid grid-cols-1 gap-2">
        <FormField
          id="description"
          label="Description"
          type="text"
          :value="form['description']"
          @update="handleFormUpdate('description', $event)"
        />
      </div>
    </div>

    <div class="flex justify-between mt-4">
      <TextButton @click="handleClose">Cancel</TextButton>
      <TextButton @click="handleSave">Save</TextButton>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import TextButton from "@/components/TextButton.vue";
import FormField from "@/components/TransactionEditor/FormField.vue";
import { useCategoriesStore } from "@/stores/categories";
import { useSourcesStore } from "@/stores/sources";
import { useAccountsStore } from "@/stores/accounts";
import { useTransactionsStore } from "@/stores/transactions";

interface FieldSchema {
  id: string;
  label: string;
  type?: "text" | "select" | "number" | "date";
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
    const { addTransaction } = useTransactionsStore();

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
      created_at: "",
      source: "",
      description: "",
      category: "",
      account: "",
      amount: "",
    });

    const formSchema: FieldSchema[] = [
      {
        id: "created_at",
        label: "Date",
        type: "date",
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
      const formatted = {
        ...form.value,
        created_at: new Date(form.value.created_at + "T00:00"), // save as UTC
        amount: form.value.amount * 100, // convert to cents
      };
      addTransaction(formatted);
      handleClose();
    };

    const handleFormUpdate = (field: keyof FormData, value: string) => {
      form.value[field] = value;
    };

    return {
      form,
      formSchema,
      sourceOptions,
      categoryOptions,
      accountOptions,
      handleFormUpdate,
      handleClose,
      handleSave,
    };
  },
};
</script>
