<template>
  <div class="admin">
    <nav class="admin_nav d-flex justify-content-between">
      <div>
        <ion-icon
          style="color: #231f20; font-size: 18px"
          name="search-outline"
        />
        <input placeholder="search" type="text" class="admin_nav_input">
      </div>

      <div class="admin_nav_profile">
        <img
          src="@/static/images/quote.png"
          alt=""
          class="admin_nav_profile_img"
          style="width: 44px; border-radius: 50%"
        >
      </div>
    </nav>
    <DashboardUsers />
  </div>
</template>

<script>
export default { name: 'AdminDashboard', layout: 'dashboard' }
</script>

<style lang="scss" scoped>
.admin {
  width: 100%;

  &_nav {
    padding: 15px;
  }
}
</style>
