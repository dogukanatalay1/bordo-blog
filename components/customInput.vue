<template>
  <div>
    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      class="form-input"
    >
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    placeholder: {
      type: String,
      default: 'Enter your email'
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      // placeholder: 'Enter your name'
      inputValue: ''
    }
  },
  methods: {
    sendData () {
      this.$emit('inputValue', this.inputValue)
    }
  }
}
</script>

<style lang="scss" scoped></style>
