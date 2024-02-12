// LineChartFixedHours.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import ChangeGraphButton from "./ChangeGraphButton";

const LineChartFixedHours = ({ onButtonClick }) => {
    // change this tempory stuff
    const labels = ['14:00', '15:00', '16:00', '17:00', '18:00'];
    const dataPoints = [1630, 1704, 1640, 1745, 1791];

    const data = {
        labels,
        datasets: [
            {
                label: 'Data',
                data: dataPoints,
                borderColor: ['rgb(0, 200, 0)',
                    'rgb(255, 0, 0)'],
                backgroundColor: ['rgba(0, 200, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)'],
                tension: 0.1,
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            x: { title: { display: true, text: 'TIME' }, grid: { display: false } },
            y: { beginAtZero: false, title: { display: true, text: 'FREE SPOTS' }, grid: { display: false } }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        layout: { padding: 20 },
        elements: { point: { radius: 0 } },
    };

    return (
        <div>
            <div style={{width: "500px", height: "400px", background: 'white'}}>
                <Line data={data} options={options} />
            </div>
            <ChangeGraphButton onClick={onButtonClick} text={"GO BACK"} />
        </div>
    );
};

export default LineChartFixedHours;
