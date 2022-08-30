import { createApp } from 'vue'
import store from './store/index.js';
import App from './App.vue'
import router from './routes.js';
import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BasePlate from "./components/UI/BasePlate.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";


const app = createApp(App);

app.component('base-container', BaseContainer);
app.component('base-spinner', BaseSpinner);
app.component('base-button', BaseButton);
app.component('base-plate', BasePlate);
app.component('base-dialog', BaseDialog);

app.use(router);
app.use(store);
app.mount('#app')
