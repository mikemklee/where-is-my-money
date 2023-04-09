<template>
  <div class="border border-gray-100 my-6 flex flex-col rounded p-4">
    <h3 class="font-semibold text-lg mb-4">
      {{ selectedTransaction ? "Edit" : "Add" }} transaction
    </h3>
    <div class="flex flex-col gap-y-2">
      <div class="grid grid-cols-2 gap-2">
        <FormField
          id="created_at"
          label="Date"
          type="date"
          :value="form['created_at']"
          @update="handleFormUpdate('created_at', $event)"
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
      <TextButton v-if="selectedTransaction" @click="handleDelete" color="red">
        Delete
      </TextButton>
      <div class="ml-auto flex gap-x-4">
        <TextButton @click="handleClose">Cancel</TextButton>
        <TextButton fill @click="handleSave">Save</TextButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watchEffect } from "vue";
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

type FormData = Record<FieldSchema["id"], string | number>;

export default {
  components: {
    TextButton,
    FormField,
  },
  props: {
    selectedTransaction: {
      type: Object,
      required: false,
    },
  },
  setup(props, { emit }) {
    const { categories } = useCategoriesStore();
    const { sources } = useSourcesStore();
    const { accounts } = useAccountsStore();
    const { addTransaction, editTransaction, deleteTransaction } =
      useTransactionsStore();

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
      amount: 0,
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

    watchEffect(() => {
      if (props.selectedTransaction) {
        const dateObj = new Date(props.selectedTransaction.created_at);

        // Format the date as "YYYY-MM-DD"
        const formattedDate = dateObj.toLocaleDateString("en-CA", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

        form.value = {
          ...props.selectedTransaction,
          amount: Number(props.selectedTransaction.amount) / 100, // convert to dollars
          created_at: formattedDate,
        };
      }
    });

    const handleClose = () => {
      emit("close");
    };

    const handleDelete = async () => {
      await deleteTransaction(props.selectedTransaction!.id);

      handleClose();
    };

    const handleSave = async () => {
      const formatted = {
        ...form.value,
        created_at: new Date(form.value.created_at + "T00:00"), // save as UTC
        amount: Number(form.value.amount) * 100, // convert to cents
      };

      if (props.selectedTransaction) {
        await editTransaction(props.selectedTransaction.id, formatted);
      } else {
        await addTransaction(formatted);
      }

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
      handleDelete,
      handleSave,
    };
  },
};
</script>
