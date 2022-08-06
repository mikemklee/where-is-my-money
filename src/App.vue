<script>
import EntryEditor from './components/EntryEditor/EntryEditor.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import History from './components/History/History.vue';
import { supabase } from './supabase';
import Auth from './components/Auth.vue';
import Profile from './components/Profile.vue';
import { useUserStore } from './store';

export default {
  components: {
    Auth,
    Profile,
    EntryEditor,
    Header,
    Footer,
    History,
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
  <div class="p-24 flex flex-col w-full h-full">
    <Header />
    <div class="container" style="padding: 50px 0 100px 0">
      <Profile v-if="userStore.user" />
      <Auth v-else />
    </div>
    <div class="flex">
      <History />
      <EntryEditor />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
