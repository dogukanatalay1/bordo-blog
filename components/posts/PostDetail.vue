<template>
  <div class="detail-component">
    <span v-sanitize="post.content" />
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  methods: {
    sanitize (event) {
      event.preventDefault()
      const html = this.$sanitize(event.clipboardData.getData('text/html'))
      document.execCommand('insertHTML', false, html)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-component {
  width: 80%;
}
</style>
