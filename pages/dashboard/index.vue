<template>
  <div class="admin">
    <div style="padding: 0px 40px; width: 100%">
      <DashboardSliderCardSlider />
    </div>
    <DashboardUsers />
  </div>
</template>

<script>
export default { name: 'AdminDashboard', layout: 'dashboard' }
</script>

<style lang="scss" scoped>
.admin {
  width: 100%;
}
</style>
