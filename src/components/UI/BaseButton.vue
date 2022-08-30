<template>
  <button v-if="!link" class="btn">
    <slot></slot>
  </button>
  <router-link v-else :to="to" class="btn">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
.btn {
  font-family: inherit;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: inherit;

  background: var(--alt-bg-color);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  border: none;
  padding: 10px 39px 10px 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all ease-in var(--change-theme-animation-duration);
  cursor: pointer;
  text-decoration: none;
}

.btn:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>