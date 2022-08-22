<template>
  <div>
    <div v-for="tag in tags" :key="tag">
      {{ tag.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagTest',
  data () {
    return {
      tags: []
    }
  },
  created () {
    this.getAllTags()
  },
  methods: {
    getAllTags () {
      this.$API.tags.getAllTags().then((response) => {
        this.tags = response.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
