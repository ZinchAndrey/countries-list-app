<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  div {
    max-width: 1340px;
    padding: 0 30px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    div {
      padding: 0 16px;
    }
  }
</style>