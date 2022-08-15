<template>
  <div
    class="profile-page d-flex justify-content-center align-items-center p-10"
  >
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

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
  .profile-page {
    flex-direction: column;
  }
}
</style>
