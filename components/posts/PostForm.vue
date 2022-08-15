<template>
  <div
    class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"
  >
    <form style="width: 500px" @submit.prevent="createPost()">
      <fieldset>
        <!-- <legend v-if="isUpdate">
          Update Post
        </legend>
        <legend v-else>
          Create a post
        </legend> -->
        <div class="form-group">
          <label>Topic</label>
          <CustomInput
            type="text"
            placeholder="Enter topic"
            @inputValue="title = $event"
          />
        </div>
        <div class="form-group">
          <label>Descrtiption</label>
          <CustomInput
            type="text"
            placeholder="Enter description"
            @inputValue="description = $event"
          />
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea v-model="content" class="form-control" rows="5" />
        </div>
        <div class="form-group">
          <label>Tags</label>
          <div class="d-flex">
            <CustomInput
              type="text"
              class="mr-2"
              placeholder="Enter tags"
              @inputValue="tag = $event"
            />
            <button type="button" class="btn btn-submit">
              Add
            </button>
          </div>
        </div>
        <button type="submit" class="btn btn-submit my-2">
          Kaydet
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data () {
    return {
      title: '',
      description: '',
      content: '',
      tags: []
    }
  },
  methods: {
    createPost () {
      const data = {
        title: this.title,
        description: this.description,
        content: this.content,
        tags: this.tags
      }
      this.$API.posts.createPost({ ...data }).then(() => {
        this.$router.push({ name: 'blogs' })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
