<template>
  <div class="dashboard d-flex">
    <DashboardSidebar />
    <div style="width: 100%" class="d-flex flex-column">
      <DashboardNav /> <Nuxt />
    </div>
  </div>
</template>

<script>
import DashboardNav from '../components/dashboard/DashboardNav.vue'
export default {
  name: 'DashboardLayout',
  components: { DashboardNav },
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
