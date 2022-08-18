<template>
  <section>
    <TexteditorEditor v-model="info" class="mt-5" />
    <div>{{ info }}</div>
    <button class="btn btn-primary ml-5" @click="createPost()">
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
        cover_image:
          'https://ktucectest.herokuapp.com/media/events/SaveYourTearseventalbum/311.jpg',
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
