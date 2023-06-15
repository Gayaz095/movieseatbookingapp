import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExitPage from "./ExitPage";
import { MovieProvider } from "./MovieContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieDropdown from "./MovieDropdown";
import SeatBooking from "./SeatBooking";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Checkout from "./Checkout";

const App = () => {
  return (
    <Router>
      <MovieProvider>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/exit" element={<ExitPage />} />
          <Route path="/booking" element={<SeatBooking />} />
          <Route path="/movies" element={<MovieDropdown />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </MovieProvider>
    </Router>
  );
};

export default App;
