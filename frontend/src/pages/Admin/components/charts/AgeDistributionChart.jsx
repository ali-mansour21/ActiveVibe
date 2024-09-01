// src/components/AgeDistributionChart.jsx
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AgeDistributionChart = () => {
  const [data, setData] = useState({
    labels: ["0-18", "19-30", "31-50", "51+"], // Age ranges
    datasets: [
      {
        label: "Age Distribution",
        data: [0, 0, 0, 0], // Replace with actual data
        backgroundColor: ["#ff7043", "#66bb6a", "#42a5f5", "#ab47bc"],
      },
    ],
  });

  useEffect(() => {
    // Fetch data from the backend or set the state with the actual data
    const fetchData = async () => {
      // Example data fetch
      // Replace this with a real API call to fetch age data
      const ageData = { "0-18": 10, "19-30": 40, "31-50": 30, "51+": 20 };
      setData({
        labels: Object.keys(ageData),
        datasets: [
          {
            label: "Age Distribution",
            data: Object.values(ageData),
            backgroundColor: ["#ff7043", "#66bb6a", "#42a5f5", "#ab47bc"],
          },
        ],
      });
    };

    fetchData();
  }, []);

  return <Bar data={data} height={300} />;
};

export default AgeDistributionChart;
