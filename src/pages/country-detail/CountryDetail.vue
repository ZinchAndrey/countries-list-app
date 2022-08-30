<template>
  <base-container>
    <div v-if="!countriesLoaded">
      <base-spinner></base-spinner>
    </div>
    <div v-else>
      <header class="country__header">
        <base-button class="btn--back" @click="goBack">Back</base-button>
      </header>
      <section class="country">
        <img :src="country.flagSrc" alt="" class="country__flag" />
        <div class="country__content">
          <h2 class="country__caption">
            {{ country.name }}
          </h2>
          <ul class="country__description-list">
            <li class="country__description-item">
              <b>Native Name:</b> {{ country.nativeName }}
            </li>
            <li class="country__description-item">
              <b>Population:</b> {{ population }}
            </li>
            <li class="country__description-item">
              <b>Region:</b> {{ country.region }}
            </li>
            <li class="country__description-item">
              <b>Sub Region:</b> {{ country.subRegion }}
            </li>
            <li class="country__description-item">
              <b>Capital:</b> {{ country.capital }}
            </li>
            <li class="country__description-item">
              <b>Top Level Domain:</b> {{ topLevelDomain }}
            </li>
            <li class="country__description-item">
              <b>Currencies:</b> {{ currencies }}
            </li>
            <li class="country__description-item">
              <b>Languages:</b> {{ languages }}
            </li>
          </ul>
          <div class="country__borders-block">
            <b>Border Countries:</b>
            <ul class="country__borders-list">
              <li
                class=""
                v-for="borderCountry in country.borderCountries"
                :key="borderCountry.key"
              >
                <base-plate>
                  {{ borderCountry }}
                </base-plate>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    languages() {
      let languages = "";
      // if (this.country.languages.length > 1) {
      //   return this.country.languages.reduce((sum, language) => {
      //     return (sum.name || sum) + ", " + language.name;
      //   });
      // }
      // return this.country.languages[0].name;

      // Если использовать reduce(), то не получилось написать элегантно норм функцию, которая бы работала корректно, если один элемент в массиве

      this.country.languages.forEach(
        (language) => (languages += language.name + ", ")
      );
      return languages.slice(0, -2);
    },
    countryKey() {
      return this.$route.params.countryKey;
    },
    countriesLoaded() {
      return !this.isLoading && !!this.$store.getters.countries.length;
    },
    country() {
      let countries = this.$store.getters.countries;

      // if (!countries.length) {
      //   this.loadCountries();
      // }
      // countries = this.$store.getters.countries;

      return countries.find((country) => country.key === this.countryKey);
    },
    population() {
      return this.country.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    currencies() {
      let currenciesStr = "";
      this.country.currencies &&
        this.country.currencies.forEach(
          (currency) => (currenciesStr += currency.name + ", ")
        );
      return currenciesStr.slice(0, -2);
    },
    topLevelDomain() {
      // ВЫНЕСТИ ВО ВСПОМОГАТЕЛЬНУЮ ФУНКЦИЮ
      const topLevelDomains = this.country.topLevelDomain.reduce(
        (prev, current) => {
          return prev + current + ", ";
        },
        ""
      );
      return topLevelDomains.slice(0, -2);
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    // Возможно, здесь нужно только одну страну загружать?
    // Если да, то где хранить информацию об этом? Здесь или в хранилище?
    async loadCountries() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("loadCountries");
      } catch (error) {
        this.error = error.message || "Sorry, we have an error";
      }

      this.isLoading = false;
    },
  },
  created() {
    const countries = this.$store.getters.countries;

    if (!countries.length) {
      this.loadCountries();
    }
  },
};
</script>

<style scoped>
.country__header {
  padding: 80px 0;
}

.btn--back::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background: url("../../assets/countries/arrow-left-black.svg") no-repeat
    center;
  transition: background-image var(--change-theme-animation-duration) ease-in;
}

.dark-theme .btn--back::before {
  background: url("../../assets/countries/arrow-left.svg") no-repeat center;
}

.country {
  font-size: 16px;
  line-height: 32px;
  color: inherit;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.country__flag {
  width: 560px;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
.country__content {
  flex-grow: 1;
  max-width: 600px;
}
.country__caption {
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  margin: 0 0 23px;
}
.country__description-list {
  padding: 0;
  margin: 0 0 68px;
  list-style: none;

  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-columns: 50% 50%;
  grid-auto-flow: column;
  column-gap: 10px;
}
.country__description-item {
}

.country__borders-block {
  display: flex;
  align-items: center;
}
.country__borders-list {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  justify-content: end;
  align-content: center;
  /* justify-items: stretch; */
  margin: 0 0 0 16px;
  padding: 0;
  list-style: none;
}
.country__borders-item {
}

.country__borders-item {
  font-family: inherit;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: inherit;

  background: var(--alt-bg-color);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  border: none;
  padding: 5px 10px;
  min-width: 96px;

  text-align: center;

  transition: all ease-in 0.1s;
  cursor: pointer;
}

.country__borders-item:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 1280px) {
  .country {
    justify-content: space-around;
  }
  .country__content {
    max-width: 400px;
  }

  .country__description-list {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1100px) {
  .country__header {
    padding: 40px 0;
  }

  .country {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 500px;
    margin: 0 auto;
    padding: 25px 0;
  }

  .country__caption {
    margin-bottom: 16px;
  }

  .country__flag {
    margin: 0 0 44px;
  }

  .country__content {
    align-self: flex-start;
    max-width: 100%;
    width: 100%;
  }

  .country__description-list {
    margin-bottom: 32px;
  }

  .country__borders-block {
    flex-direction: column;
    align-items: flex-start;
  }

  .country__borders-list {
    width: 100%;
    margin: 16px 0 0;
    justify-content: stretch;
    align-items: center;
  }
}
</style>