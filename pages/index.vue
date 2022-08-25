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
  // middleware: 'guest',
  created () {
    // console.log(this.$auth.loggedIn)
    // console.log(this.$auth.user.data.roles[0].name)
    // console.log(this.$auth.user.data.roles[0].name === 'Admin')
  }
}
</script>

<style></style>
