<template>
  <div class="tags-percent">
    <h4>Most used Tags</h4>
    <div class="tag-names d-flex">
      <span
        v-for="(tag, i) in tags"
        :key="tag"
        class="d-flex flex-row"
        style="margin: 0"
      >
        <ion-icon :style="{ color: colors[i] }" name="ellipse" />
        {{ tag.tag.name }}
        <!-- {{ tag.percentile }} -->
      </span>
    </div>
    <div class="chart-div d-flex">
      <DashboardDoughnutChart
        v-for="(tag, i) in tags"
        :key="tag"
        :color="colors[i]"
        :tag="tag"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagsPercent',
  data () {
    return {
      tags: [],
      colors: ['#34B53A', '#4339F2', '#FF3A29', '#02A0FC']
    }
  },
  created () {
    this.getMostUsedTags(4)
  },
  methods: {
    getMostUsedTags (count) {
      this.$API.tags.getMostUsedTags(count).then((response) => {
        this.tags = response.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-percent {
  box-sizing: content-box;
  padding: 30px;
}

.tag-names {
}
</style>
