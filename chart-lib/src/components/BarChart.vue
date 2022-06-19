<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
// import Chart from 'chart.js';

export default {
  props: ['propsdata'],
  // 컴포넌트 속성 && 인스턴스 속성
  mounted() {
    // const ctx = document.getElementById('barChart');
    const ctx = this.$refs.barChart;
    const myChart = new this.$_Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }
}
</script>

<style>

</style>