import React, { useState } from "react";
import CathedralImage from "../images/durhamNotMyImageRECropped.png";
import NavBar from "../components/navBar";
import MainGraphs from "../components/mainGraphs";
import BasicStatsRow from "../components/basicStatsRow";
import TimePeriodTab from "../components/timePeriodTab";
import DashboardGrid from "../components/dashboardGrid";
import ScrollDown from "../components/scrollDown";
import ChangeGraphButton from "../components/ChangeGraphButton";

// placeholder for API actual data
const pieChartData = [
    { currentTotal: 500, totalCapacity: 1000 }, // Example 1
    { currentTotal: 300, totalCapacity: 800 },  // Example 2
    { currentTotal: 450, totalCapacity: 1200 }, // Example 3
    { currentTotal: 700, totalCapacity: 1200 }, // Example 4
];



export default function HomePage() {

    const [showPieChart, setShowPieChart] = useState(true);

    const handleChartToggle = () => {
        setShowPieChart(!showPieChart);
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${CathedralImage})`
    };

    return (
        <div className="bg-gray-200">
            {/* Page 1 - Landing Page*/}
            <div className="max-h-screen flex flex-col justify-center">
                <div style={backgroundImageStyle} className="flex flex-col h-screen justify-center">
                    <NavBar/>
                    <MainGraphs showPieChart={showPieChart} onChartToggle={handleChartToggle} />
                    <div className="flex flex-col justify-center mt-5 gap-20 ">
                            <ChangeGraphButton onClick={handleChartToggle} text={"CHANGE GRAPH"}/>
                            <ScrollDown/>
                    </div>
                </div>
            </div>

            {/* Page 2 - Insights Page*/}

            <div name="newScreen" className="flex flex-col min-h-screen max-h-screen">
                <TimePeriodTab/>
                <BasicStatsRow/>
                <div className="flex flex-row justify-between">
                    <DashboardGrid data={pieChartData}/>
                    <h1>Hey</h1>
                </div>
            </div>

        </div>

    );
}
