<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <UserProfile />
    <PostsPostForm />
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
