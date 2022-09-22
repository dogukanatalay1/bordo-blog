<template>
  <div :style="{ backgroundColor: color }" class="credit">
    <div
      class="credit_heading d-flex justify-content-between align-items-center"
    >
      <span class="credit_heading_head">CraftworkBank</span>
      <div class="credit_heading_icon-container">
        <ion-icon
          class="credit_heading_icon-container_icon"
          name="wifi-outline"
        />
      </div>
    </div>
    <div class="credit_info d-flex flex-column">
      <span class="credit_info_name">Henry Richardson</span>
      <span class="credit_info_number">4567 **** **** 4501</span>
    </div>
    <div
      class="credit_footer d-flex justify-content-between align-items-center"
    >
      <span class="credit_footer_date">04 / 23</span>
      <span class="credit_footer_card d-flex align-items-center">
        <ion-icon style="color: #ff3a29" name="ellipse" />mastercard</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreditCard',
  props: {
    color: {
      type: String,
      default: '#4339F2'
    }
  }
}
</script>

<style lang="scss" scoped></style>
