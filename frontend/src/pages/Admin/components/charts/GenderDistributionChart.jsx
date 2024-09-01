// src/components/GenderDistributionChart.jsx
import  { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderDistributionChart = () => {
  const [data, setData] = useState({
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [0, 0], // Replace with actual data
        backgroundColor: ["#2196f3", "#e91e63"],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    // Fetch data from the backend or set the state with the actual data
    const fetchData = async () => {
      // Example data fetch
      // Replace this with a real API call to fetch gender data
      const genderData = { male: 60, female: 40 };
      setData({
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Gender Distribution",
            data: [genderData.male, genderData.female],
            backgroundColor: ["#2196f3", "#e91e63"],
            hoverOffset: 4,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return <Pie data={data} height={300} />;
};

export default GenderDistributionChart;
