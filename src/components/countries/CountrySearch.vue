<template>
  <div class="search__block">
    <svg class="search__icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="search">
        <path
          id="Shape"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
          fill="currentColor"
        />
      </g>
    </svg>

    <input
      type="text"
      class="search"
      @input="search"
      v-model="searchTerm"
      placeholder="Search for a country…"
    />
    <button class="clear-btn" @click="clearSearchField" v-show="hasSearchValue">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
        <path
          d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    hasSearchValue() {
      return !!this.searchTerm.length;
    },
  },
  methods: {
    search() {
      this.$store.commit("setSearchValue", this.searchTerm);
    },
    clearSearchField() {
      this.searchTerm = "";
      this.$store.commit("setSearchValue", this.searchTerm);
    },
  },
};
</script>

<style scoped>
.search__block {
  position: relative;
}
.search {
  font-size: inherit;
  line-height: inherit;
  text-align: left;
  padding: 18px 30px 18px 74px;

  color: inherit;

  background: var(--alt-bg-color);
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  border: none;
  width: 480px;
  transition: background-color var(--change-theme-animation-duration) ease-in,
    color var(--change-theme-animation-duration) ease-in;
}

.search::placeholder {
  color: inherit;
}

.search:focus,
.search:active {
  outline: none;
  background: var(--select-bg-color-hover);
}

.search__icon {
  display: block;
  width: 18px;
  height: 18px;
  background: url("../../assets/countries/search-icon.svg") no-repeat center;

  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
  transition: all var(--change-theme-animation-duration) ease-in;
}

/* .dark-theme .search__block::before {
  background: url("../../assets/countries/search-icon.svg") no-repeat center;
} */

.clear-btn {
  display: block;
  fill: #ffffff;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 5px;

  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  .search__block {
    width: 100%;
    margin-bottom: 40px;
  }

  .search {
    width: 100%;
    padding: 14px 73px;
  }
}
</style>