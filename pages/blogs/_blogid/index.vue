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
      id: this.$route.params.postId,
      post: {}
    }
  },
  created () {
    this.getSingleUsersPost(this.id)
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
