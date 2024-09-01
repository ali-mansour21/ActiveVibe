// src/components/BookingsOverTimeChart.jsx
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

const BookingsOverTimeChart = () => {
  const [data, setData] = useState({
    labels: [], // Dates
    datasets: [
      {
        label: "Bookings Over Time",
        data: [], // Booking counts
        borderColor: "#42a5f5",
        fill: false,
      },
    ],
  });

  useEffect(() => {
    // Fetch data from the backend or set the state with the actual data
    const fetchData = async () => {
      // Example data fetch
      // Replace this with a real API call to fetch bookings data over time
      const bookingsData = [
        { date: "2024-08-01", count: 10 },
        { date: "2024-08-02", count: 20 },
        { date: "2024-08-03", count: 15 },
      ];
      setData({
        labels: bookingsData.map((item) => item.date),
        datasets: [
          {
            label: "Bookings Over Time",
            data: bookingsData.map((item) => item.count),
            borderColor: "#42a5f5",
            fill: false,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return <Line data={data} height={300} />;
};

export default BookingsOverTimeChart;
