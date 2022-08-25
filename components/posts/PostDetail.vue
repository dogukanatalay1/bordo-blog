<template>
  <div class="detail-component">
    <!-- <div v-html="post.content" /> -->
    <div v-html="sanitizeHTML()" />
    <!-- <div>
      {{ sanitizeHTML() }}
    </div> -->
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
    sanitizeHTML () {
      return this.$sanitize(this.post.content)
    }
  }
}
</script>
