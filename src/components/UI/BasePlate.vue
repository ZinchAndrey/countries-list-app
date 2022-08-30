<template>
  <div class="plate">
    <slot></slot>
  </div>
</template>

<style scoped>
.plate {
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
}
</style>