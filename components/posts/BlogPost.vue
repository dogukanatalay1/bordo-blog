<template>
  <div class="post-card d-flex flex-column align-items-start p-0">
    <!-- <img class="post-card_img" src="@/static/images/blog.png" alt=""> -->
    <img
      class="post-card_img"
      :src="`http://bordo-blog.herokuapp.com/public${post.cover_image}`"
      alt=""
    >
    <div class="post-card_content d-flex flex-column align-items-start p-0">
      <div
        class="
          post-card_content_head-subhead
          d-flex
          flex-column
          align-items-start
          p-0
        "
      >
        <span class="post-card_content_head-subhead_subhead">{{
          post.title
        }}</span>
        <div
          class="
            post-card_content_head-subhead_head-and-text
            d-flex
            flex-column
            align-items-start
            p-0
          "
        >
          <div
            class="
              post-card_content_head-subhead_head-and-text_head-and-icon
              d-flex
              flex-row
              align-items-start
              p-0
            "
          >
            <span
              class="
                post-card_content_head-subhead_head-and-text_head-and-icon_heading
              "
            >{{ post.title }}</span>
            <div
              class="
                post-card_content_head-subhead_head-and-text_head-and-icon_icon-wrap
              "
            >
              <!------>
              <!-- <nuxt-link :to="`/blogs/:${post.title}`">
                <ion-icon
                  class="post-card_content_head-subhead_head-and-text_head-and-icon_icon-wrap_icon"
                  name="arrow-forward-outline"
                />
              </nuxt-link> -->
              <!------>
              <nuxt-link
                class="
                  post-card_content_head-subhead_head-and-text_head-and-icon_icon-wrap_icon
                "
                :to="{
                  name: 'blogs-blogid',
                  params: { blogid: post.title, postId: post._id },
                }"
              >
                <ion-icon
                  class="
                    post-card_content_head-subhead_head-and-text_head-and-icon_icon-wrap_icon
                  "
                  name="arrow-forward-outline"
                />
              </nuxt-link>
              <!------>
            </div>
          </div>
          <p class="post-card_content_head-subhead_head-and-text_text">
            {{ post.description }}
          </p>
        </div>
      </div>
      <div
        class="
          post-card_content_avatar-container
          d-flex
          flex-row
          align-items-center
          p-0
        "
      >
        <!-- <img
          class="post-card_content_avatar-container_avatar"
          src="@/static/images/quote.png"
          alt=""
        > -->
        <img
          :src="`http://bordo-blog.herokuapp.com/public${post.writer.avatar}`"
          alt=""
          class="post-card_content_avatar-container_avatar"
        >
        <div class="post-card_content_avatar-container_name-and-date">
          <p class="post-card_content_avatar-container_name-and-date_name">
            {{ post.writer.first_name }} {{ post.writer.last_name }}
          </p>
          <p class="post-card_content_avatar-container_name-and-date_date">
            {{ format_date(post.createdAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    format_date (value) {
      if (value) {
        return moment(value).format('DD.MM.YYYY')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
