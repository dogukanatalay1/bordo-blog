<template>
  <div class="col-md-4">
    <div class="card p-3 py-4">
      <div class="d-flex align-items-center justify-content-center">
        <img
          src="@/static/images/quote.png"
          width="120"
          class="rounded-circle"
        >
      </div>

      <div class="text-center mt-3">
        <h5 class="mt-2 mb-0">
          Name: {{ $auth.user.data.first_name }} {{ $auth.user.data.last_name }}
        </h5>
        <span>Role: {{ $auth.user.data.role }}</span>

        <div class="px-4 mt-1">
          <p class="fonts">
            Email: {{ $auth.user.data.email }}
          </p>
        </div>
        <div class="px-4 mt-1">
          <p class="fonts">
            Email notifications: {{ $auth.user.data.email_notification }}
          </p>
        </div>

        <div class="buttons">
          <button class="btn btn-outline-primary px-4">
            Message
          </button>
          <button class="btn btn-primary px-4 ms-3">
            Contact
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard'
}
</script>

<style lang="scss" scoped></style>
