import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">Welcome to the Cinema Dashboard</h2>
            <p className="card-text">Select Movies and book your seats!</p>
            <Link to="/movies" className="btn btn-primary">
              Book Movies Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
