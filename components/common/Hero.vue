<template>
  <section class="hero d-flex flex-column align-items-center">
    <!-- NAVBAR -->
    <CommonTheNavbar />
    <!-- HEADİNG -->
    <div class="hero_header-container d-flex flex-row align-items-start">
      <div
        class="
          hero_header-container_content
          d-flex
          flex-column
          align-items-start
          p-0
        "
      >
        <div
          class="
            hero_header-container_content_heading
            d-flex
            flex-column
            align-items-start
            p-0
          "
        >
          <p class="heading">
            Simple, transparent business credit cards
          </p>
          <p class="support-text">
            No money, no problems, Untitled is a next-generation financial
            technology company in the process of reinventing banking. 30-day
            free trial.
          </p>
        </div>
        <div
          class="
            hero_header-container_content_actions
            d-flex
            flex-row
            align-items-start
            p-0
          "
        >
          <button class="action-btn demo-btn">
            <span class="demo-btn-text">Demo</span>
          </button>
          <button class="action-btn sign-btn">
            <span class="sign-btn-text">Sign in</span>
          </button>
        </div>
      </div>
    </div>
    <!-- IMG CONTAINER -->
    <div class="hero_img-container d-flex flex-column align-items-center" />
  </section>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/_hero.scss";
</style>
