<template>
  <div class="section d-flex align-items-center justify-content-around">
    <!-- <PostsBlogPost v-for="post in posts" :key="post.id" :post="post" /> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogSection',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    // getPosts () {
    //   this.$API.posts.getPreviewPosts().then((response) => {
    //     // this.posts = response.data
    //     console.log(response)
    //   })
    // }
    async getPosts () {
      const res = axios.get(
        'https://79a2-78-187-64-85.eu.ngrok.io/api/v1/post/getAll/previews'
      )
      const data = await res
      console.log(data)
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
