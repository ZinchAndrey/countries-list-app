<template>
  <header class="header">
    <base-container class="header__wrapper">
      <!-- Возможно это ссылка на главную  -->
      <a class="title" href="/countries">Where in the world</a>
      <label class="dark-mode-label" for="dark-theme">
        <input
          class="visually-hidden"
          type="checkbox"
          id="dark-theme"
          name="dark-theme"
          @input="changeThemeColor"
        />
        Dark Mode
      </label>
    </base-container>
  </header>
</template>

<script>
export default {
  methods: {
    changeThemeColor() {
      this.$store.commit("changeThemeColor", !this.$store.getters.isDarkTheme);
    },
  },
};
</script>

<style scoped>
.header {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: inherit;
  background-color: var(--alt-bg-color);
  transition: background-color var(--change-theme-animation-duration) ease-in;

  width: 100%;
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 23px;
  padding-bottom: 23px;
}

.title {
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  margin: 0;
  text-decoration: none;
  color: inherit;
}

.dark-mode-label {
  padding: 5px 0 5px 28px;
  position: relative;
  cursor: pointer;
  transition: all ease-in var(--change-theme-animation-duration);
}

.dark-mode-label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: url("../../assets/header/light-mode-icon.svg") no-repeat center;
  transition: background-image var(--change-theme-animation-duration) ease-in;
}

.dark-theme .dark-mode-label::before {
  background: url("../../assets/header/dark-mode-icon.svg") no-repeat center;
}

.label:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .header {
    font-size: 12px;
    line-height: 16px;
  }
  .header__wrapper {
    padding: 30px 16px;
  }

  .title {
    font-size: 14px;
    line-height: 20px;
  }

  .dark-mode-label {
    padding-left: 24px;
  }

  .dark-mode-label::before {
    width: 16px;
    height: 16px;
  }
}
</style>