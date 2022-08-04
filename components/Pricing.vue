<template>
  <section class="pricing-section d-flex flex-column align-items-center">
    <div class="pricing-section_heading d-flex flex-column align-items-start">
      <div
        class="pricing-section_heading_content d-flex flex-column align-items-start p-0"
      >
        <div
          class="pricing-section_heading_content_head-support-container d-flex flex-column align-items-start p-0"
        >
          <div
            class="pricing-section_heading_content_head-support-container_head"
          />
          <p
            class="pricing-section_heading_content_head-support-container_support"
          />
        </div>
      </div>
    </div>
    <div class="pricing-section_content d-flex flex-row align-items-center" />
  </section>
</template>

<script>
export default {
  name: 'PricingSection'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/_pricing.scss';
</style>
