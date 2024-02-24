// LandingPie.js
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { apiEndpoint } from "../API/apiEndpoint";
import ChangeGraphButton from "./ChangeGraphButton";
import BusyBar from "./busyBar";

const LandingPie = ({ onButtonClick }) => {
    const [currentTotal, setCurrentTotal] = useState(0);

    useEffect(() => {
        const fetchOccupancyData = () => {
            fetch(`${apiEndpoint}?limit=1`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        const totalValue = parseInt(data[0].Total.replace(/,/g, ''), 10);
                        setCurrentTotal(totalValue);
                    }
                })
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchOccupancyData();
        const interval = setInterval(fetchOccupancyData, 60000);
        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: ['Total Occupancy', 'Remaining Capacity'],
        datasets: [
            {
                data: [currentTotal, 1800 - currentTotal],
                backgroundColor: ['rgb(146,53,180)', 'rgba(146,53,180, 0.2)'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        interaction: { mode: null },
        animation: { animateRotate: true },
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
            <div className="w-[450px] h-[450px] flex justify-center items-center">
                <Doughnut data={data} options={options} />
                <div className="font-extrabold gap-2 text-white text-8xl centered-value absolute flex items-center flex-col">
                    {currentTotal}
                    <p className="text-base">FREE SPACES</p>
                    <ChangeGraphButton onClick={onButtonClick} text={"WHAT ABOUT LATER?"}/>
                </div>
            </div>
    );
};

export default LandingPie;
