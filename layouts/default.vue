<template>
  <div>
    <CommonTheNavbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head () {
    return {
      script: [
        {
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
          body: true
        },
        {
          src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
          body: true
        }
      ]
    }
  }
}
</script>
