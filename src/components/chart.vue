<template>
  <div class="chart">
    <apexchart
      height="100%"
      width="100%"
      type="bar"
      id="tokenChart"
      :series="series"
      :options="options"
    />
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      oneYear: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [
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
          ]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [300, 400, 450, 500, 490, 100, 200, 900, 380, 490, 780, 650]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.chart{
  height: 100%;
  width: 100%;
}
</style>
