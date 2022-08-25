<template>
  <div class="tags-percent m-5">
    <h4 class="">
      Most used Tags
    </h4>
    <div v-if="tags">
      <div class="tag-names d-flex mb-2">
        <div
          v-for="(tag, i) in tags"
          :key="tag.id"
          class="d-flex flex-row align-items-center"
          style="margin: 0"
        >
          <ion-icon :style="{ color: colors[i] }" name="ellipse" />
          <span class="mr-3"> {{ tag.tag.name }}</span>
        </div>
      </div>
      <div class="chart-div d-flex">
        <DashboardDoughnutChart
          v-for="(tag, i) in tags"
          :key="tag.id"
          :color="colors[i]"
          :tag="tag"
          class="chart"
        />
      </div>
    </div>
    <!-- <div class="count-input-container">
      Count: <input v-model="count" class="count-input" type="number">
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'TagsPercent',
  data () {
    return {
      tags: [],
      colors: ['#34B53A', '#4339F2', '#FF3A29', '#02A0FC'],
      count: 4
    }
  },
  watch: {
    count () {
      this.getMostUsedTags(this.count)
    }
  },
  created () {
    this.getMostUsedTags(this.count)
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
  background-color: #fff;
}

.chart-div {
  margin: 20px;
}

p {
  width: 70%;
}
.count-input {
  width: 40px;
  border: 1px solid grey;
  border-radius: 6px;
  text-align: center;
}
.tag-names {
}
</style>
