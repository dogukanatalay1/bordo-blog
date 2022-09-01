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
        <span class="side-form_user-info_infos_name">Örnek İnsan</span>
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
          <input
            type="file"
            accept="image/*"
            height="48"
            @change="uploadImage"
          >
        </div>
        <div class="side-form_form_form-group">
          <label class="label" for="title">Title</label>
          <CustomInput
            type="text"
            placeholder="Enter title"
            @inputValue="title = $event"
          />
        </div>
        <div class="side-form_form_form-group">
          <label class="label" for="password">Description</label>
          <CustomInput
            type="text"
            placeholder="Enter description"
            @inputValue="description = $event"
          />
        </div>
        <button class="btn mt-2" type="submit">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { serialize } from 'object-to-formdata'

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
      tagList: [],
      image: null
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

      const object = {
        title: this.title,
        description: this.description,
        content: this.content,
        tags: tagIdList,
        cover_image: this.image
      }

      const formData = serialize(object)
      /*
      Serializing: The process whereby an object or data
      structure is translated into a format
      suitable for transfer over a network, or storage
      */
      this.$API.posts.createPost(formData).then((response) => {
        console.log(response)
      })
    },
    uploadImage (e) {
      this.image = e.target.files[0]
      console.log(this.image)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstracts/_variables.scss';
.btn {
  background-color: $bordo;
  color: white;
}
</style>
