<template>
  <div class="users">
    <DashboardUserInfo v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
export default {
  name: 'UsersDashboard',
  data () {
    return {
      users: []
    }
  },
  created () {
    this.getAllUsers()
  },
  methods: {
    getAllUsers () {
      this.$API.admin.adminGetAllUsers().then((response) => {
        console.log(response)
        this.users = response.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.users {
  padding: 40px;
}
</style>
