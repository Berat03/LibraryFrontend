// GenericPieChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const GenericPieChart = ({ value, totalCapacity, options, sizing = "w-[450px] h-[450px]", txtSize="text-9xl"}) => {
    const chartData = {
        labels: ['Total Occupancy', 'Remaining Capacity'],
        datasets: [
            {
                data: [value, totalCapacity - value],
                backgroundColor: ['rgb(146,53,180)', 'rgba(146,53,180, 0.2)'],
                borderWidth: 0,
            },
        ],
    };

    // Apply sizing prop as class styles
    const containerStyles = `${sizing} flex justify-center items-center relative`;
    const textStyles = `${txtSize} font-extrabold gap-2 text-white centered-value absolute flex items-center flex-col`;
    return (
        <div className={containerStyles}>
            <Doughnut data={chartData} options={options} />
            <div className={textStyles}>
                {value}
                <p className="text-base">FREE SPACES</p>
            </div>
        </div>
    );
};

export default GenericPieChart;
