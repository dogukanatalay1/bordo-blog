<template>
  <div class="main-page d-flex flex-column align-items-center">
    <!-- <CommonHero /> -->
    <!-- <Sponsors /> -->
    <!-- <Features /> -->
    <Pricing />
  </div>
</template>

<script>
import Pricing from '../components/Pricing.vue'
export default {
  name: 'IndexPage',
  components: { Pricing }
}
</script>

<style>
@import '@/assets/scss/pages/_home.scss';
</style>
