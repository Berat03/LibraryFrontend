// HomePage.js
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LandingPie from "../components/LandingPie";
import LineChartFixedHours from "../components/LineChartFixedHours";
import CathedralImage from "../images/durhamNotMyImageRECropped.png";

export default function HomePage() {
    const [showPieChart, setShowPieChart] = useState(true);

    const handleChartToggle = () => {
        setShowPieChart(!showPieChart);
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${CathedralImage})`
    };

    return (
        <div style={backgroundImageStyle} className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center">
            <div className="text-center p-1 font-bold text-white w-full">
                <NavBar />
            </div>
            <div className="flex-grow flex justify-center items-center">
                {showPieChart
                    ? <LandingPie key="pieChart" onButtonClick={handleChartToggle} />
                    : <LineChartFixedHours key="barChart" onButtonClick={handleChartToggle} />}
            </div>
        </div>
    );
}
