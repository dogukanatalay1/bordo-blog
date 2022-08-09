<template>
  <div class="main-page d-flex flex-column align-items-center">
    <CommonHero />
    <Sponsors />
    <Features />
    <CtaSection />
    <Pricing />
    <Quote />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
@import '@/assets/scss/pages/_home.scss';
</style>
