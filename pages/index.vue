<template>
  <div class="main-page d-flex flex-column align-items-center">
    <CommonHero />
    <Sponsors />
    <Features />
    <CtaSection />
    <Pricing />
    <Quote />
    <CtaSectionS />
    <CommonTheFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created () {
    // if (this.$store.state.auth.user.data.roles[0].name === 'SUPERADMIN') {
    // }
  }
}
</script>
