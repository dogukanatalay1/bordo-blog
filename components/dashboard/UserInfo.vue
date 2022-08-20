<template>
  <div class="user-info">
    <div class="user-info_user-container d-flex">
      <div class="user-info_user-container_img-container">
        <img src="@/static/images/quote.png" alt="">
      </div>
      <div class="user-info_user-container_username-role d-flex flex-column">
        <span class="user-info_user-container_username-role_name">
          {{ user.first_name }}{{ user.last_name }}
        </span>
        <span class="user-info_user-container_username-role_role">
          {{ user.roles[0].name }}
        </span>
      </div>
    </div>
    <div
      class="user-info_posts-container d-flex flex-column align-items-center justify-content-center"
    >
      <span class="user-info_posts-container_post-count">34</span>
      <span class="user-info_posts-container_post">Published Posts</span>
    </div>
    <div
      class="user-info_likes-container d-flex flex-column justify-content-center"
    >
      <span class="user-info_likes-container_likes-count">200</span>
      <span class="user-info_likes-container_likes">Likes</span>
    </div>
    <div
      class="user-info_email-container d-flex flex-column justify-content-center align-items-center"
    >
      <span class="user-info_email-container_email-name">
        {{ user.email }}
      </span>
      <span class="user-info_email-container_email"> email </span>
    </div>
    <div class="user-info_icon-container d-flex align-items-center">
      <ion-icon
        class="user-info_icon-container_icon"
        name="chevron-forward-outline"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    user: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
