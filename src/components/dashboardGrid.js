import React, { useState } from 'react';
import GenericPieChart from './genericPieChart'; // Assuming this path is correct

const DashboardGrid = ({ data }) => {
    const [selectedChart, setSelectedChart] = useState(0);

    const handleChange = (event) => {
        setSelectedChart(parseInt(event.target.value, 10));
    };

    const options = {
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
    };

    const sizing = "w-64 h-64"; // Example responsive sizes

    return (
        <div>
            {/* Dropdown for mobile views */}
            <div className="sm:hidden">
                <label htmlFor="chart-select" className="block text-sm sm:text-base font-medium text-gray-700">Select a Chart</label>
                <select id="chart-select" value={selectedChart} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base sm:text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    {data.map((_, index) => (
                        <option key={index} value={index}>Pie {index + 1}</option>
                    ))}
                </select>
            </div>

            {/* Responsive chart display for mobile */}
            <div className="sm:hidden w-full h-64"> {/* Ensure consistent height */}
                <GenericPieChart
                    value={data[selectedChart].currentTotal}
                    totalCapacity={data[selectedChart].totalCapacity}
                    options={options}
                    sizing={sizing}
                />
            </div>

            {/* Grid for non-mobile views */}
            <div className="hidden sm:grid grid-cols-2 gap-1 py-4">
                {data.map((pieData, index) => (
            <div key={index} className="border-gray-200 m-5">
                        <GenericPieChart
                            value={pieData.currentTotal}
                            totalCapacity={pieData.totalCapacity}
                            options={options}
                            sizing={sizing}
                            txtSize={"text-6xl"}
                        >{pieData.currentTotal}</GenericPieChart>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardGrid;
