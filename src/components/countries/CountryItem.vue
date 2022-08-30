<template>
  <router-link class="country__link" :to="countryLink">
    <div class="country__item">
      <img class="country__flag" :src="country.flagSrc" :alt="country.name" />
      <div class="country__properties properties">
        <h2 class="properties__title">{{ country.name }}</h2>
        <ul class="properties__list">
          <li class="properties__item">
            <b>Population:</b> {{ populationFormatted }}
          </li>
          <li class="properties__item"><b>Region:</b> {{ country.name }}</li>
          <li class="properties__item"><b>Capital:</b> {{ country.capital ? country.capital : 'No capital' }}</li>
        </ul>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
  computed: {
    populationFormatted() {
      return this.country.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    countryLink() {
      return '/countries/' + this.country.key;
    }
  },
};
</script>

<style scoped>
.country__link {
  text-decoration: none;
}

.country__item {
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: var(--text-color);

  width: 264px;
  background: var(--alt-bg-color);
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;

  transition: all var(--change-theme-animation-duration) ease-in,
    transform ease-in 0.1s;

  cursor: pointer;
}

.country__item:hover {
  transform: scale(1.02);
}

.country__flag {
  display: block;
  width: 263px;
  height: 160px;
  margin: 0 0 24px;
}

.properties {
  padding: 0 24px 46px;
}

.properties__title {
  font-size: 18px;
  line-height: 26px;
  font-weight: 800;
  margin: 0 0 16px;
}

.properties__list {
  padding: 0;
  list-style: none;
}
.properties__item {
  font-weight: 300;
}

.properties__item b {
  font-weight: 600;
}
.properties__item + .properties__item {
  margin-top: 8px;
}
</style>