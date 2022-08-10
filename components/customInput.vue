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
    },
    cmc: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // placeholder: 'Enter your name'
      inputValue: ''
    }
  },
  watch: {
    cmc () {
      this.sendData()
    }
  },
  methods: {
    sendData () {
      this.$emit('inputValue', this.inputValue)
      console.log('child method called')
    }
  }
}
</script>

<style lang="scss" scoped></style>
