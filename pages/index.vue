<template>
  <div class="main-page d-flex flex-column align-items-center">
    <!-- <CommonHero /> -->
    <!-- <Sponsors /> -->
    <Features />
  </div>
</template>

<script>
import Features from '../components/Features.vue'
export default {
  name: 'IndexPage',
  components: { Features }
}
</script>

<style>
@import '@/assets/scss/pages/_home.scss';
</style>
