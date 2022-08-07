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

export default {
  setup() {
    const loading = ref(false);
    const email = ref('');

    const handleLogin = async () => {
      try {
        loading.value = true;
        const { error } = await supabase.auth.signIn({ email: email.value });
        if (error) throw error;
        alert('Check your email for the login link!');
      } catch (error) {
        alert(error.error_description || error.message);
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
