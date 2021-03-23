<template>
  <section>
    <pie-chart :data="data" :options="options" :width="90" :height="90" />
  </section>
</template>
<script>
import PieChart from '@/plugins/chartjs/pie-chart'
export default {
  components: {
    PieChart
  },
  data () {
    return {
      data: {
        labels: ['Bags', 'Jackets'],
        datasets: [
          {
            backgroundColor: ['#c4c4c4', '#25282a'],
            data: [40, 60]
          }
        ]
      },
      options: {
        cutoutPercentage: 80,
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
