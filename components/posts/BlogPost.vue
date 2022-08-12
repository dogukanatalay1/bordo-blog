<template>
  <div class="post-card d-flex flex-column align-items-start p-0">
    <img class="post-card_img" src="@/static/images/blog.png" alt="">
    <div class="post-card_content d-flex flex-column align-items-start p-0">
      <div
        class="post-card_content_head-subhead d-flex flex-column align-items-start p-0"
      >
        <span class="post-card_content_head-subhead_subhead">Design</span>
        <div
          class="post-card_content_head-subhead_head-and-text d-flex flex-column align-items-start p-0"
        >
          <div
            class="post-card_content_head-subhead_head-and-text_head-and-icon d-flex flex-row align-items-start p-0"
          >
            <span
              class="post-card_content_head-subhead_head-and-text_head-and-icon_heading"
            >UX review presentations</span>
            <div
              class="post-card_content_head-subhead_head-and-text_head-and-icon_icon-wrap"
            >
              <ion-icon
                class="post-card_content_head-subhead_head-and-text_head-and-icon_icon-wrap_icon"
                name="arrow-forward-outline"
              />
            </div>
          </div>
          <p class="post-card_content_head-subhead_head-and-text_text">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
      </div>
      <div
        class="post-card_content_avatar-container d-flex flex-row align-items-center p-0"
      >
        <img
          class="post-card_content_avatar-container_avatar"
          src="@/static/images/quote.png"
          alt=""
        >
        <div class="post-card_content_avatar-container_name-and-date">
          <p class="post-card_content_avatar-container_name-and-date_name">
            Olivia Rhye
          </p>
          <p class="post-card_content_avatar-container_name-and-date_date">
            20 Jan 2022
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data () {
    return {
      posts: []
    }
  },
  created () {
    // this.getPosts()
  },
  methods: {
    getPosts () {
      this.$API.posts.getUserPost().then((response) => {
        this.posts = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
