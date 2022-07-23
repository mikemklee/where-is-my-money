import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue imports
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import InputNumber from 'primevue/inputnumber';                   
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';


import './style.css'
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './primevue-theme-override.css'

const app = createApp(App)

// PrimeVue configs
app.use(PrimeVue)
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Card', Card);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('InputNumber', InputNumber);
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);

app.mount('#app')
