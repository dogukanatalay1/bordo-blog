<template>
  <div class="dashboard d-flex">
    <DashboardSidebar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstracts/_variables.scss';
.dashboard {
  background-color: #f8f8f8;
}
</style>
