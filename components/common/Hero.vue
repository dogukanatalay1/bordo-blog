<template>
  <section class="hero d-flex flex-column align-items-center">
    <!-- NAVBAR -->
    <CommonTheNavbar />
    <!-- HEADİNG -->
    <div class="hero_header-container d-flex flex-row align-items-start">
      <div
        class="hero_header-container_content d-flex flex-column align-items-start p-0"
      >
        <div
          class="hero_header-container_content_heading d-flex flex-column align-items-start p-0"
        >
          <p class="heading">
            Blogs in any subject you can ever imagine.
          </p>
          <p class="support-text">
            No money, no problems, Untitled is a next-generation financial
            technology company in the process of reinventing banking. 30-day
            free trial.
          </p>
        </div>
        <div
          class="hero_header-container_content_actions d-flex flex-row align-items-start p-0"
        >
          <button class="action-btn demo-btn">
            <span
              class="demo-btn-text d-flex align-items-center justify-content-around"
            >
              <div class="play-icon-container">
                <ion-icon class="play-icon" name="play-circle-outline" />
              </div>
              Demo</span>
          </button>
          <button class="action-btn sign-btn">
            <span class="sign-btn-text">Sign in</span>
          </button>
        </div>
      </div>
    </div>
    <!-- IMG CONTAINER -->
    <div class="hero_img-container d-flex flex-column align-items-center">
      <div class="hero_img-container_content">
        <div class="hero_img-container_content_cards">
          <img class="card card-1" src="~/static/images/card1.png" alt="">
          <img class="card card-2" src="~/static/images/card2.png" alt="">
          <img class="card card-3" src="~/static/images/card3.png" alt="">
          <img class="card card-4" src="~/static/images/card4.png" alt="">
          <img class="card card-5" src="~/static/images/card1.png" alt="">
          <img class="card card-6" src="~/static/images/card2.png" alt="">
          <img class="card card-7" src="~/static/images/card3.png" alt="">
          <img class="card card-8" src="~/static/images/card4.png" alt="">
          <!-- <img class="card card-9" src="~/static/images/card1.png" alt=""> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent'
}
</script>
class="card"
<style lang="scss" scoped>
@import '@/assets/scss/layout/_hero.scss';
</style>
