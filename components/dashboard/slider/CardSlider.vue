<template>
  <div class="swiper-container mySwiper">
    <div class="swiper-wrapper">
      <div v-for="i in 3" :key="i" class="swiper-slide">
        <DashboardCreditCard :color="colors[i]" />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'CardSlider',
  data () {
    return {
      colors: ['#4339F2', '#FF3A29', '#34B53A']
    }
  },
  mounted () {
    Swiper.use([Autoplay])
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 25
    })
  }
}
</script>

<style lang="scss" scoped></style>
