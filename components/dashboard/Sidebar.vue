<template>
  <div class="sidebar">
    <div class="sidebar_logo">
      <nuxt-link style="text-decoration: none" to="/" class="sidebar_logo_icon">
        { }
      </nuxt-link>
    </div>
    <hr>
    <div class="sidebar_buttons">
      <div>
        <nuxt-link style="color: black; font-size: 24px" to="/dashboard/charts">
          <ion-icon name="pie-chart" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'DashboardSidebar' }
</script>

<style lang="scss" scoped></style>
