import React from 'react'
import Chart from 'react-apexcharts'

function Earning() {
    const series = [
        {
            name: 'Earnings',
            data: [200, 330, 548, 740, 880, 1100],
        },
    ]

    const options = {
        chart: {
            type: 'bar',
            height: 210,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 6,
                barHeight: '60%',
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff'],
                fontWeight: 600,
            },
        },
        colors: ['#297372'],
        xaxis: {
            categories: [
                'January',
                'March',
                'May',
                'July',
                'September',
                'November',
            ],
        },
        grid: {
            show: false,
        },
    }

    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            height={210}
            width={349}
        />
    )
}

export default Earning