<template>
  <div class="detail-component">
    <div class="detail" />
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  created () {
    this.addContent()
    console.log(this.post)
  },
  methods: {
    addContent () {
      document.querySelector('.detail').innerHTML += this.post.content
    }
  }
}
</script>

<style lang="scss" scoped></style>
