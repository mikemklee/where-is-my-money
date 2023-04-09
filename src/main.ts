import { createApp } from "vue";
import { createPinia } from "pinia";

import "@fontsource/noto-sans-kr";
import "@fontsource/source-sans-pro";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { PrCog, PrTimes } from "oh-vue-icons/icons";

const icons = [PrCog, PrTimes];

addIcons(...icons);

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("v-icon", OhVueIcon);
app.mount("#app");
