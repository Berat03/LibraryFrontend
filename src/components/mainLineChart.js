import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import ChangeGraphButton from "./ChangeGraphButton";

const MainLineChart = ({ onButtonClick }) => {
    const labels = ['14:00', '15:00', '16:00', '17:00', '18:00'];
    const dataPoints = [1630, 1704, 1640, 1745, 1791];

    const data = {
        labels,
        datasets: [
            {
                label: 'Data',
                data: dataPoints,
                borderColor: 'rgb(146,53,180)',
                tension: 0.3,
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'TIME',
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                grid: {
                    display: false
                },
                ticks: {
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                }
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'FREE SPOTS',
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                grid: {
                    display: false
                },
                ticks: {
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        layout: {
            padding: 20,
        },
        elements: {
            point: {
                radius: 3,
                backgroundColor: 'uni-purple'
            },
        },
    };

    return (
        <div className="flex flex-col justify-center">
            <div style={{width: "500px", height: "400px"}}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default MainLineChart;
