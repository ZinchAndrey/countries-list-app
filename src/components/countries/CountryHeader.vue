<template>
  <div class="country__header">
    <div class="country__header-wrapper">
      <country-search></country-search>
      <country-filter></country-filter>
    </div>
  </div>
</template>

<script>
import CountryFilter from "./CountryFilter.vue";
import CountrySearch from "./CountrySearch.vue";

export default {
  components: {
    CountryFilter,
    CountrySearch,
  },
};
</script>

<style scoped>
.country__header {
  font-size: 14px;
  line-height: 20px;
  color: inherit;

  padding: 48px 0;
}

.country__header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .country__header {
    font-size: 12px;
    padding: 24px 0;
  }

  .country__header-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>