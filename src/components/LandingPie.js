import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { apiEndpoint } from "../apiEndpoint";

const LandingPie = () => {
  const [currentTotal, setCurrentTotal] = useState(0); // State to hold the total occupancy

  const fetchOccupancyData = () => {
    fetch(`${apiEndpoint}?limit=1`) // Assuming this fetches the latest data
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          // Parse the "Total" value to remove commas and convert to a number
          const totalValue = parseInt(data[0].Total.replace(/,/g, ''), 10);
          setCurrentTotal(totalValue);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchOccupancyData();
    const interval = setInterval(fetchOccupancyData, 60000);
    return () => clearInterval(interval); // close
  }, []);

  const data = {
    labels: ['Total Occupancy', 'Remaining Capacity'],
    datasets: [
      {
        data: [currentTotal, 1800 - currentTotal], // Use the fetched Total value
        backgroundColor: [
          'rgba(255, 99, 132, 1)', // Total Occupancy color
          'rgba(54, 162, 235, 0)', // Remaining, transparent
        ],
        borderWidth: 0,
      },
    ],
  };

  // this is given way for chartjs
  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    interaction: {
      mode: null
    },
    events: [],
    animation: {
      animateRotate: true,
    },
    cutout: '80%',
    responsive: true,
    maintainAspectRatio: false,
  };

  // chart.js has own styling
  return (
    <div className="w-[400px] h-[400px] relative flex justify-center items-center">
      <Doughnut className=" " data={data} options={options} />
      <div className="font-extrabold text-white text-8xl centered-value absolute flex justify-center items-center">
        {currentTotal}
      </div>
    </div>
);

};
export default LandingPie;
