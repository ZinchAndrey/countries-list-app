import { createRouter, createWebHistory } from 'vue-router';

import CountriesList from './pages/countries/CountriesList.vue';
import CountryDetail from './pages/country-detail/CountryDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/countries' },
    { path: '/countries', component: CountriesList },
    { path: '/countries/:countryKey', component: CountryDetail },
  ]
});


export default router;