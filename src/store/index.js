import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      countries: [],
      currentCountry: null,
      currentRegionFilter: 'All regions',
      currentSearchValue: '',
      isDarkTheme: localStorage.getItem('isDarkTheme') === 'true' ? true : false,
    }
  },
  getters: {
    countries(state) {
      return state.countries;
    },
    currentCountry(state) {
      return state.currentCountry;
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
    },
    setCurrentCountry(state, payload) {
      state.currentCountry = payload;
    },
    setRegionFilter(state, payload) {
      state.currentRegionFilter = payload;
    },
    setSearchValue(state, payload) {
      state.currentSearchValue = payload;
    },
    clearSearchValue(state) {
      state.currentSearchValue = '';
    },
    changeThemeColor(state, payload) {
      localStorage.setItem('isDarkTheme', payload);
      state.isDarkTheme = payload;
    }
  },
  // используем action для работы с асинхронным кодом
  actions: {
    async loadCountries(context) {
      // const response = await fetch('https://restcountries.com/v2/all');
      const response = await fetch('https://restcountries.com/v2/all?fields=name,population,capital,nativeName,region,subRegion,languages,currencies,borders,flag');
      // больше 10 полей нельзя
      // topLevelDomain можно убрать  
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
    async loadCurrentCountry(context, countryName) {
      const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
      const responseData = await response.json();

      const loadedCountry = responseData[0];
      const currentCountry = {
        name: loadedCountry.name,
        population: loadedCountry.population,
        capital: loadedCountry.capital,
        nativeName: loadedCountry.nativeName,
        region: loadedCountry.region,
        subRegion: loadedCountry.subregion,
        languages: loadedCountry.languages,
        currencies: loadedCountry.currencies,
        borderCountries: loadedCountry.borders,
        flagSrc: loadedCountry.flag,
        topLevelDomain: loadedCountry.topLevelDomain,
        key: loadedCountry.name,
      }

      context.commit('setCurrentCountry', currentCountry);
    },
  }
});

export default store;