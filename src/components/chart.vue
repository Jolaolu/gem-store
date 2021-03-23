<template>
  <div class="w-full">
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
// import dayjs from 'dayjs'
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
          type: 'datetime',
          categories: this.oneYear
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    }
  }
}
</script>
