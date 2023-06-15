import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieContext";

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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title">Thank you for booking!</h2>
          <h4 className="card-text">Movie:</h4>
          <h1 className="card-text">{selectedMovie.title}</h1>
          <h4 className="card-text">Selected Seats:</h4>
          <ul className="list-group">
            {selectedSeats.map((seat) => (
              <li className="list-group-item" key={seat}>
                Seat {seat}
              </li>
            ))}
          </ul>
          <h4 className="card-text">Total Amount: ${calculateTotalPrice()}</h4>
          <button className="btn btn-primary" onClick={handleNavigateHome}>
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
