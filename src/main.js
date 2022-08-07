import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';

// PrimeVue imports
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Column from 'primevue/column';
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import './style.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './primevue-theme-override.css';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

// PrimeVue configs
app.use(PrimeVue);
app.use(ToastService);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('InputNumber', InputNumber);
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);

app.mount('#app');
