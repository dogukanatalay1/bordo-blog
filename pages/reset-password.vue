<template>
  <div class="signup-page d-flex flex-column align-items-center">
    <div class="signup-page_content d-flex flex-column align-items-center p-0">
      <div
        class="signup-page_content_header d-flex flex-column align-items-center p-0"
      >
        <nuxt-link
          to="/"
          style="text-decoration: none"
          class="signup-page_content_header_logo-mark"
        >
          { }
        </nuxt-link>
        <div
          class="signup-page_content_header_text-and-support d-flex flex-column align-items-center p-0"
        />
      </div>
      <div
        class="signup-page_content_form-container d-flex flex-column align-items-center p-0"
      >
        <form
          class="signup-page_content_form-container_form"
          @submit.prevent=""
        >
          <div class="signup-page_content_form-container_form_input-field">
            <label class="label" for="newPassword">New password</label>
            <CustomInput
              type="password"
              placeholder="Enter your new password"
              @inputValue="newPassword = $event"
            />
          </div>
          <div class="signup-page_content_form-container_form_input-field">
            <label
              class="label"
              for="registerNewPassword"
            >Register new password</label>
            <CustomInput
              type="password"
              placeholder="Register your new password"
              @inputValue="registerNewPassword = $event"
            />
          </div>
        </form>
      </div>
      <Notification v-show="error" :message="error" />
      <div
        class="signup-page_content_actions d-flex flex-column align-items-start p-0"
      >
        <button
          type="submit"
          class="signup-page_content_actions_btn"
          @click="userLogin"
        >
          <span class="signup-page_content_actions_btn_text">Sign in</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordPage',
  data () {
    return {
      newPassword: '',
      registerNewPassword: ''
    }
  },
  methods: {}
}
</script>
