<template>
  <section>
    <TexteditorEditor v-model="info" class="mt-5" />
    <div>{{ info }}</div>
    <button class="btn btn-primary" @click="createPost()">
      Save
    </button>
  </section>
</template>

<script>
export default {
  name: 'TestPage',
  data: () => ({
    info: ''
  }),
  methods: {
    createPost () {
      const data = {
        title: 'denemeeeeeeeeee',
        description: 'asoıdjyugdsaudgshayuas',
        content: this.info,
        tags: ['62f9e85c6bbf16ba47641791']
      }

      this.$API.posts.createPost({ ...data }).then((response) => {
        alert(response)
      })
    }
  }
}
</script>
