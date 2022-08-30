<template>
  <v-select
    :options="regions"
    class="select"
    @update:modelValue="setFilter"
    :modelValue="currentFilter"
    placeholder="Filter by Region"
  ></v-select>
</template>

<script>
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      regions: [
        "All regions",
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
      ],
    };
  },
  computed: {
    currentFilter() {
      return this.$store.getters["currentFilter"];
      // нормально ли тут, что тоже через vuex значение снимаем?
    },
  },
  methods: {
    setFilter(value) {
      // Может лучше текущий фильтр хранить во Vuex?
      this.$store.commit("setRegionFilter", value);
    },
  },
};
</script>

<style scoped>
.select {
  width: 200px;
  /* margin: 0 0 0 auto; */
}

* >>> {
  --vs-font-size: 14px;
  --vs-line-height: 20px;

  --vs-dropdown-bg: var(--alt-bg-color);
  --vs-dropdown-option-color: var(--text-color);
  /* --vs-dropdown-option-font-size: var(--text-color); */
  --vs-dropdown-option-padding: 8px 24px;
  --vs-dropdown-border-radius: 5px;
  --vs-dropdown-option--active-bg: var(--select-bg-color-hover);
  --vs-dropdown-option--active-color: var(--text-color);

  --vs-controls-color: var(--text-color);

  --vs-border-radius: 5px;

  --vs-state-disabled-bg: var(--text-color);
  --vs-state-disabled-color: var(--text-color);

  --vs-selected-color: var(--text-color);
}

* >>> .vs__dropdown-toggle {
  padding: 18px 18px 18px 24px;
  background-color: var(--alt-bg-color);
  color: inherit;
  transition: color var(--change-theme-animation-duration) ease-in,
    background-color var(--change-theme-animation-duration) ease-in;
}

* >>> .vs__dropdown-menu {
  background: var(--alt-bg-color);
  padding: 8px 0;
  border-radius: 5px;
  margin: 4px 0 0;
}

* >>> .vs__dropdown-option {
  font-size: 14px;
  line-height: 20px;
}

* >>> .vs__selected-options {
  padding: 0;
}

@media (max-width: 768px) {
  * >>> .vs__dropdown-toggle {
    padding: 14px 14px 14px 24px;
  }
}
</style>

