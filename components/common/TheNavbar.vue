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
              <button class="d-flex align-items-center">
                Products <ion-icon name="chevron-down" />
              </button>
            </div>
            <div class="nav-item">
              <button>Resources<ion-icon name="chevron-down" /></button>
            </div>
            <button class="nav-item">
              Pricing
            </button>
          </div>
        </div>

        <div
          class="nav_header_container_nav-actions d-flex flex-row align-items-center justify-content-around p-0"
        >
          <button class="nav-btn nav-btn-login">
            Log in
          </button>
          <button class="nav-btn nav-btn-signup">
            Sign up
          </button>
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

<style lang="scss" scoped></style>
