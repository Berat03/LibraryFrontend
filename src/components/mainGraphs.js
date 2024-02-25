import React from "react";
import MainDonutChart from "./mainDonutChart";
import MainLineChart from "./mainLineChart";
import BusyBar from "./busyBar";

export default function MainGraphs({ showPieChart, onChartToggle }) {
    return (
        <div className="flex">
            <div className="flex align-bottom">
                <BusyBar value={500}/>
            </div>
            <div className="flex justify-center w-full">
                {showPieChart
                    ? <MainDonutChart key="pieChart" onButtonClick={onChartToggle} />
                    : <MainLineChart key="barChart" onButtonClick={onChartToggle} />}
            </div>

        </div>
    );
}
