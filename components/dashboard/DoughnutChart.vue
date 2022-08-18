<template>
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
  />
</template>

<script>
import { Doughnut } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    cssClasses: {
      default: 'doughnut',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    },
    tag: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  data () {
    return {
      chartData: {
        // labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        // labels: this.tags,
        datasets: [
          {
            backgroundColor: [this.color, '#E2FBD7'],
            data: [this.tag.percentile, 100 - this.tag.percentile]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 44,
        borderRadius: 27,
        backgroundColor: '#E2FBD7'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.doughnut {
  width: 126px;
  height: 126px;
}
</style>
