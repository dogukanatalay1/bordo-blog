<template>
  <div>
    <PostsPostDetail :post="post" />
  </div>
</template>

<script>
export default {
  name: 'BlogId',
  data () {
    return {
      postId: this.$route.params.postId,
      post: null
    }
  },
  created () {
    this.getSingleUsersPost(this.postId)
  },
  methods: {
    getSingleUsersPost (Id) {
      this.$API.posts.getSingleUsersPost(Id).then((response) => {
        this.post = response.data.data
      })
    }
  }
}
</script>
