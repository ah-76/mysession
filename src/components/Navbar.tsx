import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="dashboard-client">Client Dashboard</Link>
        </li>
        <li>
          <Link to="dashboard-therapist">Therapist Dashboard</Link>
        </li>
        <li>
          <Link to="calendar">Calendar</Link>
        </li>
        <li>
          <Link to="payments">Payments</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
