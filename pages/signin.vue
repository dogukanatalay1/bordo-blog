<template>
  <div class="signup-page d-flex flex-column align-items-center">
    <div class="signup-page_content d-flex flex-column align-items-center p-0">
      <div
        class="signup-page_content_header d-flex flex-column align-items-center p-0"
      >
        <div class="signup-page_content_header_logo-mark">
          { }
        </div>
        <div
          class="signup-page_content_header_text-and-support d-flex flex-column align-items-center p-0"
        >
          <span class="signup-page_content_header_text-and-support_text">Sign in</span>
          <span class="signup-page_content_header_text-and-support_support">Start your 30-day free trial.</span>
        </div>
      </div>
      <div
        class="signup-page_content_form-container d-flex flex-column align-items-center p-0"
      >
        <form
          class="signup-page_content_form-container_form"
          @submit.prevent="register"
        >
          <div class="signup-page_content_form-container_form_input-field">
            <label class="label" for="email">Email*</label>
            <CustomInput
              type="text"
              placeholder="Enter your email"
              @inputValue="email = $event"
            />
          </div>
          <div class="signup-page_content_form-container_form_input-field">
            <label class="label" for="password">Password*</label>
            <CustomInput
              type="password"
              placeholder="Enter your password"
              @inputValue="password = $event"
            />
          </div>
        </form>
      </div>
      <div>
        <b-button
          style="background: transparent; border: none; color: black !important"
          @click="modalShow = !modalShow"
        >
          Forgot password?
        </b-button>

        <b-modal v-model="modalShow" hide-footer>
          <label class="label" for="password">Email*</label>
          <CustomInput
            type="text"
            placeholder="Enter your email"
            class="my-2"
            @inputValue="email = $event"
          />
          <button
            style="width: 30%; color: white"
            class="signup-page_content_actions_btn"
            @click="sendEmail()"
          >
            Send email
          </button>
        </b-modal>
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
  name: 'SignIn',
  middleware: 'guest',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      modalShow: false
    }
  },
  methods: {
    async userLogin () {
      try {
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })
          .then(() => this.$router.push({ name: 'index' }))
      } catch (error) {
        this.error = error.response.data.error.message
        console.log(error)
      }
    },
    sendEmail () {
      const data = {
        email: this.email
      }
      console.log(data)
      this.$API.users.sendEmailForPasswordReset(data).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
