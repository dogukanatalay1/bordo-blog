<template>
  <div class="">
    <PostsBlogSection />
  </div>
</template>

<script>
export default {
  name: 'TestVue',
  created () {
    console.log(this.$auth)
  }
}
</script>

<style lang="scss" scoped></style>
