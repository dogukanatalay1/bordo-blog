<template>
  <div class="dashboard d-flex">
    <DashboardSidebar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
  head () {
    return {
      script: [
        {
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
          body: true
        },
        {
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
          body: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstracts/_variables.scss';
.dashboard {
  background-color: #f8f8f8;
}
</style>
