<script>
import AppLogo from './components/AppLogo.vue';
import Auth from './components/Auth.vue';
import EntryEditor from './components/EntryEditor/EntryEditor.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import History from './components/History/History.vue';
import { useUserStore } from './store';
import { supabase } from './supabase';

export default {
  components: {
    Auth,
    EntryEditor,
    Header,
    Footer,
    History,
    AppLogo,
  },

  setup() {
    const userStore = useUserStore();
    userStore.user = supabase.auth.user();
    supabase.auth.onAuthStateChange((_, session) => {
      userStore.user = session.user;
    });

    return {
      userStore,
    };
  },
};
</script>

<template>
  <Toast position="top-center" />

  <div
    v-if="!userStore.user"
    class="w-fit h-full mx-auto flex flex-col justify-center items-center"
  >
    <AppLogo />
    <Auth />
    <div class="mt-8">
      <Footer />
    </div>
  </div>

  <div v-else class="p-24 flex flex-col w-full h-full">
    <Header />
    <div class="flex">
      <History />
      <EntryEditor />
    </div>
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
