import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      countries: [],
      currentRegionFilter: 'All regions',
      currentSearchValue: '',
      isDarkTheme: localStorage.getItem('isDarkTheme') === 'true' ? true : false,
    }
  },
  getters: {
    countries(state) {
      return state.countries;
    },
    getCountry(state, name) {
      const countries = state.countries;

      if (countries.length) {
        return countries.find((country) => country.name === name);
      }
    },
    currentFilter(state) {
      return state.currentRegionFilter;
    },
    currentSearchValue(state) {
      return state.currentSearchValue;
    },
    isDarkTheme(state) {
      return state.isDarkTheme;
    }
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
      // console.log(this.state.countries);
    },
    // setCurrentCountry(state, payload) {
    //   state.countries = payload;
    //   console.log(this.state.countries);
    // },
    setRegionFilter(state, payload) {
      state.currentRegionFilter = payload;
    },
    setSearchValue(state, payload) {
      state.currentSearchValue = payload;
    },
    changeThemeColor(state, payload) {
      localStorage.setItem('isDarkTheme', payload);
      state.isDarkTheme = payload;
    }
  },
  // используем action для работы с асинхронным кодом
  actions: {
    async loadCountries(context) {
      const response = await fetch('https://restcountries.com/v2/all');
      const responseData = await response.json();

      const loadedCountries = responseData;

      const countries = [];

      loadedCountries.forEach(country => {
        const filteredCountryData = {
          name: country.name,
          population: country.population,
          capital: country.capital,
          nativeName: country.nativeName,
          region: country.region,
          subRegion: country.subregion,
          languages: country.languages,
          currencies: country.currencies,
          borderCountries: country.borders,
          flagSrc: country.flag,
          topLevelDomain: country.topLevelDomain,
          key: country.name,
        }

        countries.push(filteredCountryData);
      });

      context.commit('setCountries', countries);
    },
  }
});

export default store;