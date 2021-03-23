<template>
  <section class="chart">
    <bar-chart :data="data" :options="options" />
  </section>
</template>
<script>
import BarChart from '@/plugins/chartjs/bar-chart'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#c4c4c4',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
{

},
