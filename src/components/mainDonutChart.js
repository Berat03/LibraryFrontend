// MainDonutChart.js
import React, { useState, useEffect } from 'react';
import GenericPieChart from './genericPieChart';
import { apiEndpoint } from "../API/apiEndpoint";
import ChangeGraphButton from "./ChangeGraphButton";
import ButtonByFloor from "./buttonByFloor";
import DashboardGrid from "./dashboardGrid";
const MainDonutChart = ({ onButtonClick }) => {
    const [currentTotal, setCurrentTotal] = useState(0);
    const [buttonToggled, setButtonToggled] = useState(false);

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

    const options = {
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
    };

    const sizing = "w-[450px] h-[450px]";

    useEffect(() => {
      console.log("Button toggled:", buttonToggled);
    }, [buttonToggled]);

    return (
        <div>
            {buttonToggled ? (
                <DashboardGrid />
            ) : (
                <div className={sizing + " flex justify-center items-center relative"}>
                    <GenericPieChart value={currentTotal} totalCapacity={1800} options={options} sizing={sizing}>
                        <div className="font-extrabold gap-2 text-white text-8xl centered-value absolute flex items-center flex-col">
                            {currentTotal}
                            <p className="text-base">FREE SPACES</p>
                            <ChangeGraphButton onClick={onButtonClick} text={"WHAT ABOUT LATER?"}/>
                        </div>
                    </GenericPieChart>
                </div>
            )}
            <ButtonByFloor stateManage={setButtonToggled}/>
        </div>
    );

};

export default MainDonutChart;
