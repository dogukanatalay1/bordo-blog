<template>
  <div class="section d-flex align-items-center justify-content-around">
    <PostsBlogPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
export default {
  name: 'BlogSection',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getUsersPost()
  },
  methods: {
    getUsersPost () {
      this.$API.posts.getUsersPost().then((response) => {
        this.posts = response.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 100vh;
  width: 100%;
}
</style>
