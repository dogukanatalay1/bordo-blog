<template>
  <div class="tags-percent m-5">
    <h4 class="">
      Most used Tags
    </h4>
    <div class="tag-names d-flex mb-2">
      <div
        v-for="(tag, i) in tags"
        :key="tag"
        class="d-flex flex-row align-items-center"
        style="margin: 0"
      >
        <ion-icon :style="{ color: colors[i] }" name="ellipse" />
        <span class="mr-3"> {{ tag.tag.name }}</span>

        <!-- {{ tag.percentile }} -->
      </div>
    </div>
    <div class="chart-div d-flex">
      <DashboardDoughnutChart
        v-for="(tag, i) in tags"
        :key="tag"
        :color="colors[i]"
        :tag="tag"
        class="chart"
      />
    </div>
    <div class="tags-text">
      <p>
        Every large design company whether it's a multi-national branding
        corporation or a regular down at heel tatty magazine publisher needs to
        fill holes in the workforce.
      </p>
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
  box-shadow: 2px 2px 2px 1px grey;
  border-radius: 20px;
  display: inline-block;
  max-width: 692px;
}

.chart {
  margin: 20px;
}

.tags-text {
}

.tag-names {
}
</style>
