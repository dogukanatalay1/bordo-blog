<template>
  <div class="d-flex flex-column">
    <span> {{ $auth.user.data.first_name }}</span>
    <span> {{ $auth.user.data.last_name }}</span>
    <span> {{ $auth.user.data.email }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  created () {
    console.log(this.$auth.user)
  }
}
</script>

<style lang="scss" scoped></style>
