import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/dashboard");
  };
  return (
    <div className="container h-100">
      <div className="card">
        <h1 className="text-uppercase text-center pt-3">PAGE NOT FOUND </h1>
      </div>
      <div className=" text-center pt-3">
        <button
          className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body text-white"
          onClick={handleNavigate}>
          Dashboard
        </button>
      </div>
    </div>
  );
};
export default NotFound;
