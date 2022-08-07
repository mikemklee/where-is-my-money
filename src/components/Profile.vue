<template>
  <div v-if="!loading" class="flex">
    <div class="flex flex-col mr-2">
      <span>Logged in as:</span>
      <span>{{ userStore.user.email }}</span>
    </div>
    <div>
      <Button
        class="p-button-sm min-w-[6rem]"
        label="Sign out"
        :disabled="loading"
        @click="signOut"
      />
    </div>
  </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../store';
import { supabase } from '../supabase';

export default {
  setup() {
    const loading = ref(true);
    const username = ref('');
    const avatar_url = ref('');

    const userStore = useUserStore();
    const toast = useToast();

    async function getProfile() {
      try {
        loading.value = true;
        userStore.user = supabase.auth.user();

        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', userStore.user.id)
          .single();

        if (error && status !== 406) throw error;

        if (data) {
          username.value = data.username;
          avatar_url.value = data.avatar_url;
        }
      } catch (error) {
        toast.add({
          severity: 'error',
          summary: 'Oops, something went wrong',
          detail: error.message,
        });
      } finally {
        loading.value = false;
      }
    }

    async function updateProfile() {
      try {
        loading.value = true;
        userStore.user = supabase.auth.user();
        const response = await supabase.auth.user();

        if (response) {
          userStore.user = response;

          const updates = {
            id: userStore.user.id,
            username: username.value,
            avatar_url: avatar_url.value,
            updated_at: new Date(),
          };

          let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
          });

          if (error) throw error;
        }
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    }

    async function signOut() {
      try {
        loading.value = true;
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
        userStore.user = null;
      }
    }

    onMounted(() => {
      getProfile();
    });

    return {
      userStore,
      loading,
      username,
      avatar_url,

      updateProfile,
      signOut,
    };
  },
};
</script>
