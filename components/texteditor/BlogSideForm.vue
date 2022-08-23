<template>
  <div class="side-form">
    <div class="side-form_user-info">
      <div class="side-form_user-info_img-container">
        <img
          class="side-form_user-info_img-container_img"
          src="~/static/images/quote.png"
          alt=""
        >
      </div>
      <div class="side-form_user-info_infos">
        <span class="side-form_user-info_infos_name">Alice Ventura</span>
        <span class="side-form_user-info_infos_role">Writer</span>
      </div>
    </div>

    <div class="side-form_tags">
      <TagsTagList @tagList="tagList = $event" />
    </div>

    <div class="side-form_form">
      <form action="" @submit.prevent="createPost()">
        <div class="side-form_form_form-group">
          <label for="">Cover image</label>
          <input type="image" height="48">
        </div>
        <div class="side-form_form_form-group">
          <label for="">Title</label>
          <input v-model="title" placeholder="Enter title" type="text">
        </div>
        <div class="side-form_form_form-group">
          <label for="">Descrtiption</label>
          <input
            v-model="description"
            placeholder="Enter description"
            type="text"
          >
        </div>
        <button class="btn btn-danger" type="submit">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideForm',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      title: '',
      description: '',
      tagList: []
    }
  },
  watch: {
    tagList () {
      console.log(this.tagList)
    }
  },
  methods: {
    createPost () {
      // const tagIdList = []
      // for (let i = 0; i < this.tagList.length; i++) {
      //   tagIdList.push(this.tagList[i]._id)
      //   // console.log(this.tagList[i])
      // }

      const tagIdList = this.tagList.map(tag => tag._id)

      const data = {
        title: this.title,
        description: this.description,
        content: this.content,
        tags: tagIdList,
        cover_image: ''
      }
      this.$API.posts.createPost(data).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
