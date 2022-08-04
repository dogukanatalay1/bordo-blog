<template>
  <section class="pricing-section d-flex flex-column align-items-center">
    <div class="pricing-section_heading d-flex flex-column align-items-start">
      <div
        class="
          pricing-section_heading_content
          d-flex
          flex-column
          align-items-start
          p-0
        "
      >
        <div
          class="
            pricing-section_heading_content_head-support-container
            d-flex
            flex-column
            align-items-start
            p-0
          "
        >
          <div
            class="pricing-section_heading_content_head-support-container_head"
          >
            <p class="sub-head">
              Upgrade
            </p>
            <p class="main-head">
              Pricing as simple as our cards
            </p>
            <p
              class="
                pricing-section_heading_content_head-support-container_support
              "
            >
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pricing-section_content d-flex flex-row align-items-center">
      <div
        class="
          pricing-section_content_left-container
          d-flex
          flex-column
          align-items-start
          p-0
        "
      />
      <div
        class="
          pricing-section_content_pricing-card
          d-flex
          flex-column
          align-items-start
          p-0
        "
      >
        <div
          class="
            pricing-section_content_pricing-card_header
            d-flex
            flex-column
            align-items-start
          "
        >
          <div
            class="
              pricing-section_content_pricing-card_header_heading-price
              d-flex
              flex-row
              align-items-start
              p-0
            "
          >
            <div
              class="
                pricing-section_content_pricing-card_header_heading-price_heading
                d-flex
                flex-column
                align-items-start
              "
            />
            <div
              class="
                pricing-section_content_pricing-card_header_heading-price_price
                d-flex
                flex-row
                align-items-end
                p-0
              "
            />
          </div>
        </div>
        <div
          class="
            pricing-section_content_pricing-card_content
            d-flex
            flex-column
            align-items-start
          "
        />
        <div
          class="
            pricing-section_content_pricing-card_footer
            d-flex
            flex-column
            align-items-start
          "
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingSection'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/_pricing.scss";
</style>
