<template>
  <form class="mt-4" @submit.prevent="handleLogin">
    <div>
      <p class="my-2">Sign in via magic link with your email below</p>
      <div class="flex flex-col">
        <div>
          <InputText
            v-model="email"
            type="email"
            placeholder="Your email"
            class="w-full"
          />
        </div>
        <div class="mt-2">
          <Button
            class="w-full"
            :label="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { supabase } from '../supabase';
import { useToast } from 'primevue/usetoast';

export default {
  setup() {
    const loading = ref(false);
    const email = ref('');
    const toast = useToast();

    const handleLogin = async () => {
      try {
        loading.value = true;
        const { error } = await supabase.auth.signIn({ email: email.value });
        if (error) throw error;
        toast.add({
          severity: 'info',
          summary: 'Login link sent!',
          detail: 'Please check your email inbox shortly',
        });
      } catch (error) {
        toast.add({
          severity: 'error',
          summary: 'Oops, something went wrong',
          detail: error.error_description || error.message,
        });
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      email,
      handleLogin,
    };
  },
};
</script>
