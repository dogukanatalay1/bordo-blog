<template>
  <div>
    {{ post }}
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
  }
}
</script>

<style lang="scss" scoped></style>
