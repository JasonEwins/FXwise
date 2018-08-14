const ctx = document.getElementById('chart').getContext('2d');

function addData(price) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(...price);
      console.log(dataset.data)
    });
  chart.update();
};

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
        datasets: [{
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            borderWidth: 2,
            borderColor: 'rgba(255, 99, 132)',
            data: [],
            pointBorderColor: 'transparent'
        }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          }
        }],
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          }
        }]
      }
    }
});