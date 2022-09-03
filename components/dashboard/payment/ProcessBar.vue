<template>
  <div class="bar">
    <div class="bar__bubble" />
    <div class="bar__line" />
    <div class="bar__bubble" />
    <div class="bar__line" />
    <div class="bar__bubble" />
    <div class="bar__line" />
    <div class="bar__bubble" />
  </div>
</template>

<script>
export default {
  name: 'ProcessBar',
  props: {},
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  max-width: 614px;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;

  &__bubble {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid black;
  }
  &__line {
    height: 2px;
    background-color: black;
    width: 25%;
  }
}
</style>
