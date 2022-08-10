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
          class="signup-page_content_header_text-and-support d-flex flex-column align-items-start p-0"
        >
          <span class="signup-page_content_header_text-and-support_text">Create an account</span>
          <span class="signup-page_content_header_text-and-support_support">Start your 30-day free trial.</span>
        </div>
      </div>
      <div
        class="signup-page_content_form-container d-flex flex-column align-items-center p-0"
      >
        <form class="signup-page_content_form-container_form" method="post">
          <div class="signup-page_content_form-container_form_input-field">
            <label class="label" for="name">Name*</label>
            <CustomInput
              ref="input1"
              type="text"
              placeholder="Enter your name"
              @inputValue="name = $event"
            />
          </div>
          <div class="signup-page_content_form-container_form_input-field">
            <label class="label" for="email">Email*</label>
            <CustomInput
              ref="input2"
              type="text"
              placeholder="Enter your email"
              @inputValue="email = $event"
            />
          </div>
          <div class="signup-page_content_form-container_form_input-field">
            <label class="label" for="password">Password*</label>
            <CustomInput
              ref="input3"
              type="password"
              placeholder="Enter your password"
              @inputValue="password = $event"
            />
          </div>
        </form>
      </div>

      <div
        class="signup-page_content_actions d-flex flex-column align-items-start p-0"
      >
        <button class="signup-page_content_actions_btn" @click="test">
          <span class="signup-page_content_actions_btn_text">Get Started</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    test () {
      console.log(this.name, this.email, this.password)
    }
  }
}
</script>

<style lang="scss" scoped></style>
