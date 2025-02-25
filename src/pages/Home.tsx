import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to MySession</h1>
      <p>Navigate to different sections:</p>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/dashboard-client">Client Dashboard</Link></li>
          <li><Link to="/dashboard-therapist">Therapist Dashboard</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/payments">Payments</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
