import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ExitPage.css";

const ExitPage = () => {
  const [active, setActive] = useState(true);
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();
  const {
    selectedMovie,
    selectedSeats,
    calculateTotalPrice,
    setSelectedMovie,
    setSelectedSeats,
  } = useContext(MovieContext);

  const handleExit = () => {
    setSelectedMovie(null);
    setSelectedSeats([]);
    localStorage.clear();
  };
  useEffect(() => {
    if (selectedSeats.length > 0) {
      toast.success(
        "You have limited 10 seconds to go back and change Seating!",
        {
          autoClose: 3000,
        }
      );
    }
  }, [selectedSeats]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      setActive(false);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f0f0f0" }}>
      <div className="card text-center exit-page-card">
        <div>
          <Link to="/" className="btn btn-primary mt-3" onClick={handleExit}>
            Go to Home Page to start again
          </Link>
        </div>

        <div className="card-body">
          <h2 className="card-title"></h2>
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              <div className="card">
                <div className="card-header">
                  <strong>Movie Name:</strong>
                </div>
                <div className="card-body">
                  <h5 className="card-text">{selectedMovie.title}</h5>
                </div>
              </div>
              <div className="card">
                <p className="card-header">
                  <strong>Selected Seats:</strong>
                </p>
                <ul className="list-group">
                  {selectedSeats.map((seat) => (
                    <li className="list-group-item" key={seat}>
                      Seat {seat}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="card-text">
                <strong>Total Amount:</strong> ${calculateTotalPrice()}
              </p>
              <p className="card-text">
                <strong>Time Remaining:</strong> {seconds} seconds
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              disabled={seconds !== 0}
              className="btn btn-primary mt-3 checkout-btn"
              onClick={handleCheckout}>
              Checkout
            </button>
          </div>
          <div>
            <div>
              {active === true ? (
                <Link to="/booking" className="btn btn-primary mt-3 ml-2">
                  Go Back to Seat Booking
                </Link>
              ) : (
                <Link className="btn btn-danger mt-3 ml-2">
                  Can't go to Seat Booking
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitPage;
