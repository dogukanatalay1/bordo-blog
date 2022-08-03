<template>
  <div>
    <CommonHero />
    <Sponsors />
  </div>
</template>

<script>
import Sponsors from '../components/Sponsors.vue'
export default {
  name: 'IndexPage',
  components: { Sponsors }
}
</script>
