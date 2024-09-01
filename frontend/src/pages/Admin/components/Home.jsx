import "../styles/home.css";
import PaymentsByStatusChart from "../components/charts/PaymentsByStatusChart";
import BookingsOverTimeChart from "../components/charts/BookingsOverTimeChart";
import GenderDistributionChart from "../components/charts/GenderDistributionChart";
import AgeDistributionChart from "../components/charts/AgeDistributionChart";
import NewUsersOverTimeChart from "../components/charts/NewUsersOverTimeChart";
import { useEffect, useState } from "react";
const Home = () => {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    totalEvents: 0,
    totalBookings: 0,
    totalRevenue: 0,
    totalGuides: 0,
  });

  useEffect(() => {
    // Fetch data from the backend to update the metrics
    const fetchMetrics = async () => {
      // Replace these static values with actual API calls to fetch data from your backend
      const fetchedMetrics = {
        totalUsers: 150, // Example value
        totalEvents: 35, // Example value
        totalBookings: 200, // Example value
        totalRevenue: 15000, // Example value in your preferred currency
        totalGuides: 10, // Example value
      };
      setMetrics(fetchedMetrics);
    };

    fetchMetrics();
  }, []);

  return (
    <div className="dashboard">
      {/* Summary Boxes */}
      <div className="summary-grid">
        <div className="summary-box">
          <h4>Total Users</h4>
          <p>{metrics.totalUsers}</p>
        </div>
        <div className="summary-box">
          <h4>Total Events</h4>
          <p>{metrics.totalEvents}</p>
        </div>
        <div className="summary-box">
          <h4>Total Bookings</h4>
          <p>{metrics.totalBookings}</p>
        </div>
        <div className="summary-box">
          <h4>Total Revenue</h4>
          <p>${metrics.totalRevenue}</p>
        </div>
        <div className="summary-box">
          <h4>Total Guides</h4>
          <p>{metrics.totalGuides}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="home-grid">
        <div className="block block-1">
          <h3 className="chart-title">Payments by Status</h3>
          <PaymentsByStatusChart  />
        </div>
        <div className="block block-2">
          <h3 className="chart-title">Bookings Over Time</h3>
          <BookingsOverTimeChart />
        </div>
        <div className="block block-3">
          <h3 className="chart-title">Gender Distribution</h3>
          <GenderDistributionChart />
        </div>
        <div className="block block-4">
          <h3 className="chart-title">Age Distribution</h3>
          <AgeDistributionChart />
        </div>
        <div className="block block-5">
          <h3 className="chart-title">New Users Over Time</h3>
          <NewUsersOverTimeChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
