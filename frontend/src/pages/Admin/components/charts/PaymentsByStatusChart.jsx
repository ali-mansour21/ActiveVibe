// src/components/PaymentsByStatusChart.jsx
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentsByStatusChart = () => {
  const [data, setData] = useState({
    labels: ["Completed", "Pending", "Failed"],
    datasets: [
      {
        label: "Payments by Status",
        data: [0, 0, 0], // Replace with actual data
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    // Fetch data from the backend or set the state with the actual data
    const fetchData = async () => {
      // Example data fetch
      // Replace this with a real API call to fetch payments data grouped by status
      const paymentsData = { completed: 50, pending: 30, failed: 20 };
      setData({
        labels: ["Completed", "Pending", "Failed"],
        datasets: [
          {
            label: "Payments by Status",
            data: [
              paymentsData.completed,
              paymentsData.pending,
              paymentsData.failed,
            ],
            backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
            hoverOffset: 4,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return <Pie data={data} />;
};

export default PaymentsByStatusChart;
