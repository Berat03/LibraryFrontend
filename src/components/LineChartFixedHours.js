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
                borderColor: ['rgb(200, 200, 1)',
                    'rgb(255, 20, 1)'],
                tension: 0.4,
                fill: false,
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
        layout: { padding: 20, },
        elements: { point: { radius: 0 } },
    };

    return (
        <div className="flex flex-col justify-center">
            <div style={{width: "500px", height: "400px"}}>
                <Line data={data} options={options} />
            </div>
            <div className="">
                <ChangeGraphButton onClick={onButtonClick} text={"GO BACK"} />
            </div>
        </div>
    );
};

export default LineChartFixedHours;
