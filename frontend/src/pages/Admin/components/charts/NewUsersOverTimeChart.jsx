// src/components/NewUsersOverTimeChart.jsx
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const NewUsersOverTimeChart = () => {
  const [data, setData] = useState({
    labels: [], // Dates
    datasets: [
      {
        label: "New Users Over Time",
        data: [], // User counts
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    // Fetch data from the backend or set the state with the actual data
    const fetchData = async () => {
      // Example data fetch
      // Replace this with a real API call to fetch new user registration data over time
      const usersData = [
        { date: "2024-08-01", count: 5 },
        { date: "2024-08-02", count: 10 },
        { date: "2024-08-03", count: 15 },
        { date: "2024-08-04", count: 7 },
      ];
      setData({
        labels: usersData.map((item) => item.date),
        datasets: [
          {
            label: "New Users Over Time",
            data: usersData.map((item) => item.count),
            borderColor: "#ff6384",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return <Line data={data} />;
};

export default NewUsersOverTimeChart;
