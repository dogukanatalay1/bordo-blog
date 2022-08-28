<template>
  <div class="detail-component">
    <!-- <div v-html="post.content" /> -->
    <div contenteditable="true" @paste="sanitize()" />
    <!-- <span v-sanitize.nothing="post.content" /> -->
    {{ post.content }}
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

  created () {
    console.log('this post: ' + this.post)
  },
  methods: {
    sanitize (event) {
      event.preventDefault()
      const html = this.$sanitize(event.clipboardData.getData('text/html'))
      // or
      // const html = this.$sanitize(
      //  event.clipboardData.getData('text/html'),
      //  {
      //    allowedTags: ['b', 'br']
      //  }
      // );
      document.execCommand('insertHTML', false, html)
    }
  }
}
</script>
