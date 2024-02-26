import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SeatBooking.css";

const SeatBooking = () => {
  const {
    selectedMovie,
    selectedSeats,
    setSelectedSeats,
    calculateTotalPrice,
  } = useContext(MovieContext);
  const noSeats = () => {
    toast.success("Select Seats First!", {
      autoClose: 2000,
    });
  };
  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter((prevSeat) => prevSeat !== seat);
      }
      return [...prevSeats, seat];
    });
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        const seatNumber = i * 5 + j + 1;
        const isSeatSelected = selectedSeats.includes(seatNumber);
        const seatClass = isSeatSelected
          ? "btn btn-success m-2"
          : "btn btn-outline-secondary m-2";
        row.push(
          <button
            key={seatNumber}
            className={seatClass}
            onClick={() => handleSeatClick(seatNumber)}
            disabled={!selectedMovie}>
            {seatNumber}
          </button>
        );
      }
      seats.push(
        <div key={i} className="d-flex justify-content-center">
          {row}
        </div>
      );
    }
    return seats;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#7edbe7" }}>
      <div className="card text-center seat-page-card">
        <div className="card-body">
          <h2 className="card-title">Seat Booking:</h2>
          {selectedMovie ? (
            <div className="card-text">
              <h3>Movie: {selectedMovie.title}</h3>
              <h3>Price: ${selectedMovie.price}</h3>
              <h3>Total Seats: {selectedSeats.length}</h3>
              <h3>Total Price: ${calculateTotalPrice()}</h3>
              <div className="d-flex flex-column align-items-center">
                {renderSeats()}
              </div>
              <Link to="/movies" className="btn btn-secondary mt-3">
                Go Back
              </Link>
              {selectedSeats.length === 0 ? (
                <Link onClick={noSeats} className="btn btn-danger mt-3 ms-3">
                  To Details
                </Link>
              ) : (
                <Link to="/exit" className="btn btn-info mt-3 ms-3">
                  To Details
                </Link>
              )}
            </div>
          ) : (
            <div>
              <Link to="/movies" className="btn btn-secondary mt-3">
                Go Home
              </Link>
              <p>Please select a movie.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
