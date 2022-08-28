<template>
  <div class="admin">
    <h2>Admin dashboard</h2>
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
