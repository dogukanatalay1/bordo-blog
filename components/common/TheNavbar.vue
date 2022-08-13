<template>
  <nav class="nav navbar">
    <div
      class="nav_header d-flex flex-column justify-content-center align-items-center position-absolute p-0"
    >
      <div
        class="nav_header_container d-flex flex-row justify-content-between align-items-center"
      >
        <div
          class="nav_header_container_content d-flex flex-row align-items-center p-0"
        >
          <div
            class="nav_header_container_content_logo d-flex flex-row align-items-start p-0"
          >
            <div class="nav_header_container_content_logo_logo-wrap">
              <h5 class="nav_header_container_content_logo_logo-wrap_logotype">
                { }Bordo Blog
              </h5>

              <div
                class="nav_header_container_content_logo_logo-wrap_logomark"
              />
            </div>
          </div>

          <div
            class="nav_header_container_content_navigation d-flex justify-content-between flex-row align-items-center p-0"
          >
            <button class="nav-item">
              Home
            </button>
            <div class="nav-item">
              <nuxt-link
                to="/blogs"
                style="text-decoration: none"
                class="nav-item d-flex align-items-center"
              >
                Blogs
              </nuxt-link>
            </div>
            <div class="nav-item">
              <button>Resources</button>
            </div>
            <button class="nav-item">
              Pricing
            </button>
          </div>
        </div>

        <div
          class="nav_header_container_nav-actions d-flex flex-row align-items-center justify-content-around p-0"
        >
          <nuxt-link
            v-if="!$auth.loggedIn"
            to="/signin"
            style="text-decoration: none"
            class="nav-btn nav-btn-login"
          >
            Log in
          </nuxt-link>
          <nuxt-link
            v-if="!$auth.loggedIn"
            to="/signup"
            style="text-decoration: none"
            class="nav-btn nav-btn-signup"
          >
            Sign up
          </nuxt-link>
          <button
            v-if="$auth.loggedIn"
            class="nav-btn nav-btn-signup"
            @click="$auth.logout()"
          >
            Log out
          </button>
          <nuxt-link
            v-if="$auth.loggedIn"
            class="d-flex align-items-center"
            to="/userprofile"
          >
            <ion-icon class="profile-icon" name="person-circle-outline" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstracts/_variables.scss';
.profile-icon {
  color: $flinstone;
  font-size: 34px;
}
</style>
