<template>
  <div class="post" />
</template>

<script>
export default {
  name: 'TestC',
  data () {
    return {
      post: {}
    }
  },
  created () {
    this.getUsersPost()
  },
  methods: {
    getUsersPost () {
      this.$API.posts.getUsersPost().then((response) => {
        // console.log(response.data.data[7])
        this.post = response.data.data[3].content

        document.querySelector('.post').innerHTML += this.post
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
