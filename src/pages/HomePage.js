import React, { useState } from "react";
import { Link as LinkScroll, Element } from "react-scroll"; // Import from react-scroll
import LandingPie from "../components/LandingPie";
import LineChartFixedHours from "../components/LineChartFixedHours";
import CathedralImage from "../images/durhamNotMyImageRECropped.png";
import NavigationBar from "../components/navigationBar";
import ChangeGraphButton from "../components/ChangeGraphButton";

export default function HomePage() {
    const [showPieChart, setShowPieChart] = useState(true);

    const handleChartToggle = () => {
        setShowPieChart(!showPieChart);
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${CathedralImage})`
    };

    return (
        <div className="min-h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center">
            <div style={backgroundImageStyle} className="min-h-screen flex flex-col justify-center">
                <div className="text-center p-1 font-bold text-white w-full">
                    <NavigationBar />
                </div>

                <div className="flex-grow flex w-full justify-center items-center">
                    {showPieChart
                        ? <LandingPie key="pieChart" onButtonClick={handleChartToggle} />
                        : <LineChartFixedHours key="barChart" onButtonClick={handleChartToggle} />}
                </div>
                <div className="flex justify-center mb-10">
                    <LinkScroll to="newScreen" smooth={true} duration={500}>
                        <ChangeGraphButton text={"GET INSIGHTS"}/>
                    </LinkScroll>
                </div>
            </div>

            {/* New screen section */}
            <div name="newScreen" className="min-h-screen bg-white flex justify-center items-center">
                <h1>Hello World</h1>
            </div>
        </div>
    );
}
