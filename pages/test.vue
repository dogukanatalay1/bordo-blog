<template>
  <section class="d-flex flex-row justify-content-between">
    <TexteditorEditor v-model="info" style="width: 100%" class="mt-5" />
    <TexteditorBlogSideForm />
  </section>
</template>

<script>
export default {
  name: 'TestPage',
  data () {
    return {
      info: ''
    }
  },
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
