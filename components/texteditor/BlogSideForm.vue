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

    <div class="side-form_tags" />

    <div class="side-form_form">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideForm',
  data () {
    return {
      title: '',
      description: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
