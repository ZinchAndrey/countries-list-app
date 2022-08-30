<template>
  <base-container>
    <base-dialog :show="!!error" title="Oops, error!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <keep-alive>
      <country-header></country-header>
    </keep-alive>
    <!-- filter  -->
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul v-else-if="hasFilteredCountries" class="countries__list">
      <li v-for="country in filteredCountries" :key="country.name">
        <country-item :country="country"></country-item>
      </li>
    </ul>
    <div v-else>
      <p class="message">
        No countries found :( <br />
        Please, change filters...
      </p>
    </div>
  </base-container>
</template>

<script>
import CountryHeader from "../../components/countries/CountryHeader.vue";
import CountryItem from "../../components/countries/CountryItem.vue";

export default {
  components: {
    CountryItem,
    CountryHeader,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    countries() {
      // return this.$store.getters.countries.slice(0, 100) || [];
      return this.$store.getters.countries || [];
    },
    countriesWasLoaded() {
      return this.$store.getters.countries.length;
    },
    currentFilter() {
      return this.$store.getters["currentFilter"];
    },
    currentSearchValue() {
      return this.$store.getters["currentSearchValue"];
    },

    filteredCountries() {
      const searchValue = this.currentSearchValue.toLowerCase();
      let filteredByRegion;

      if (!this.currentFilter || this.currentFilter === "All regions") {
        filteredByRegion = this.countries;
      } else {
        filteredByRegion = this.countries.filter(
          (country) => country.region === this.currentFilter
        );
      }

      if (searchValue) {
        return filteredByRegion.filter((country) =>
          country.name.toLowerCase().includes(searchValue)
        );
      }
      return filteredByRegion;
    },
    hasFilteredCountries() {
      return !!this.filteredCountries.length;
    },
  },
  methods: {
    async loadCountries() {
      // console.log("countries quantity: " + this.countriesWasLoaded);
      if (this.countriesWasLoaded) {
        return;
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch("loadCountries");
      } catch (error) {
        this.error = error.message || "Sorry, we have an error";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCountries();
  },
};
</script>

<style scoped>
.countries__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 263px);
  justify-content: space-between;
  gap: 75px;
  list-style: none;
  padding: 24px 0;
  margin: 0 auto;
}

.message {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: inherit;
}

@media (max-width: 768px) {
  .countries__list {
    gap: 40px;
    justify-content: center;
  }
}
</style>