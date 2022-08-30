<template>
  <div class="app-wrapper" :class="appWrapperClass">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    isDarkTheme() {
      return this.$store.getters.isDarkTheme;
    },
    appWrapperClass() {
      return this.isDarkTheme === true ? "dark-theme" : "";
    },
  },
  watch: {
    isDarkTheme() {
      this.checkTheme();
    },
  },
  methods: {
    checkTheme() {
      if (this.isDarkTheme) {
        document.body.classList.add("dark-theme");
        return;
      }

      document.body.classList.remove("dark-theme");
    },
  },
  mounted() {
    this.checkTheme();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  font-family: "Nunito Sans", "Arial", sans-serif;
  margin: 0;
  /* background: #202c36; */
}

.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  /* // -webkit-clip-path: inset(100%); */
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

body {
  --main-bg-color: #fafafa;
  --alt-bg-color: #ffffff;
  --text-color: #111517;
  --select-bg-color-hover: #f8f8f8;
  --change-theme-animation-duration: 0.1s;
}

body.dark-theme {
  --main-bg-color: #202c36;
  --alt-bg-color: #2b3844;
  --select-bg-color-hover: #3d4d5d;
  --text-color: #ffffff;
}

body {
  color: var(--text-color);
  background-color: var(--main-bg-color);
  transition: color var(--change-theme-animation-duration) ease-in,
    background-color var(--change-theme-animation-duration) ease-in;
}
</style>
