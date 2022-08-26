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
      post: null
    }
  },
  created () {
    // console.log(this.$route.params)
    this.getSingleUsersPost(this.id)
  },
  methods: {
    getSingleUsersPost (Id) {
      this.$API.posts.getSingleUsersPost(Id).then((response) => {
        // console.log(response.data.data)
        this.post = response.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
