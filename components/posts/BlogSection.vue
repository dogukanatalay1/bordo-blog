<template>
  <div
    class="section d-flex flex-column align-items-center justify-content-around"
  >
    <div
      style="width: 90%; flex-wrap: wrap"
      class="d-flex flex-row justify-content-around"
    >
      <PostsBlogPost v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <b-pagination
      v-model="currentPage"
      :total-rows="pageCount * perPage"
      :per-page="perPage"
      aria-controls="my-table"
      class="pagination-rows"
    />
  </div>
</template>

<script>
export default {
  name: 'BlogSection',
  data () {
    return {
      posts: [],
      perPage: 3,
      currentPage: 1,
      pageCount: 0
    }
  },
  watch: {
    currentPage () {
      this.getLimitedPosts(this.perPage, this.currentPage)
    }
  },
  created () {
    this.getLimitedPosts(this.perPage, this.currentPage)
  },
  methods: {
    getLimitedPosts (limit, page) {
      this.$API.posts.getLimitedPosts(limit, page).then((res) => {
        this.posts = res.data.data.posts
        this.pageCount = res.data.data.paginationInfo.totalPageCount
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/abstracts/_variables.scss';
.page-item.active .page-link {
  border: 1px solid white;
  background-color: $bordo !important;
}
.section {
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
}
.pagination-rows {
  .page-item {
    span,
    button {
      background-color: $bordo !important;
      color: $bordo !important;
      outline: none !important;

      &:hover,
      &:focus,
      &:visited,
      &:link {
        background-color: $bordo !important;
        outline: none !important;
      }
    }
  }
}
</style>
