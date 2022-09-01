<template>
  <nav class="admin_nav d-flex justify-content-between">
    <div>
      <ion-icon style="color: #231f20; font-size: 18px" name="search-outline" />
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
</template>

<script>
export default { name: 'DashboardNav' }
</script>

<style lang="scss" scoped>
nav {
  padding: 15px;
}
</style>
