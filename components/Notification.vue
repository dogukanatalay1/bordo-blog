<template>
  <div class="alert">
    <span
      class="closebtn"
      onclick="this.parentElement.style.display='none';"
    >&times;</span>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'NotificationBox',
  props: {
    message: {
      type: String,
      default: 'A problem has occured'
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
