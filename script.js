var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Budget Delevered', 'Budget Left'],
        datasets: [{
            label: '6,096.85',
            data: [12, 44],
            backgroundColor: [
                'rgb(225, 208, 247)',
                'rgb(107, 18, 217)'

            ],
            borderColor: [
                'rgb(225, 208, 247)',
                'rgb(107, 18, 217)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontSize: 12,
                fontColor: "#2a3c73",
                fontWeight: 600,
                boxWidth: 12,
            },
        },
        tooltips: {
            enables: true,
            backgroundColor: 'rgb(107, 18, 217)'
        },
        animation: {
            duration: 3000,

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var bar = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug', '4Aug'],
        datasets: [{
            label: 'Impressions',
            data: [12, 44, 13, 11, 15, 20, 11, 25, 40, 35, 27, 11, 30, 23, 24, 45, 34, 28, 13, 39, 33, 5, 42, 33, 43, 12, 44, 13, 11, 15, 20, 11, 25, 40, 35, 27, 11, 30, 23, 24, 45, 34, 28, 13, 39, 33, 5, 42, 33, 43],

            backgroundColor: [
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)', 'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',
                'rgba(213, 229, 247, 0.85)',

            ],
            borderWidth: 1,
            order: 2,
        },

        {
            label: 'CTR',
            data: [11, 30, 12, 14, 4, 0, 11, 25, 30, 35, 7, 10, 10, 23, 4, 0, 20, 30, 13, 25, 33, 0, 23, 33, 3, 11, 30, 2, 14, 15, 10, 11, 25, 0, 35, 27],
            borderColor: 'rgb(127, 127, 252)',
            tension: 0.4,
            backgroundColor: '#fff',
            type: 'line',
            order: 1,

        }
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontSize: 12,
                fontColor: "#2a3c73",
                fontWeight: 600,
                boxWidth: 12,
            },
        },
        title: {
            display: true,
            text: "CAMP v2023 © 2023 Big Happy Inc, All right reserved.",
            fontSize: 12,
            fontColor: " #2a3c73",
            fontWeight: 'bold',
        },
        tooltips: {
            enables: true,
            backgroundColor: 'rgb(127, 127, 252)'
        },
        animation: {
            duration: 3000,

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



