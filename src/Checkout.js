import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import "./Checkout.css";

const Checkout = () => {
  const {
    selectedMovie,
    selectedSeats,
    calculateTotalPrice,
    setSelectedMovie,
    setSelectedSeats,
  } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    setSelectedMovie(null);
    setSelectedSeats([]);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="checkout-container d-flex justify-content-center align-items-center vh-100">
      <div className="checkout-content">
        <h2 className="checkout-title">Thank you for booking!</h2>
        <div className="movie-info">
          <h4 className="movie-text">Movie:</h4>
          <h1 className="movie-name">{selectedMovie.title}</h1>
        </div>
        <div className="seats-info">
          <h4 className="seats-text">Selected Seats:</h4>
          <div className="seats-container">
            {selectedSeats.map((seat) => (
              <div className="seat-box" key={seat}>
                {seat}
              </div>
            ))}
          </div>
        </div>
        <h4 className="total-text">Total Amount: ${calculateTotalPrice()}</h4>
        <button
          className="btn btn-primary btn-checkout"
          onClick={handleNavigateHome}>
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default Checkout;
