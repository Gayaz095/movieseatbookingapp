import React, { createContext, useState, useEffect } from "react";
import movies from "./movies";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(() => {
    const storedMovie = JSON.parse(localStorage.getItem("selectedMovie"));
    return storedMovie || null;
  });

  const [selectedSeats, setSelectedSeats] = useState(() => {
    const storedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    return storedSeats || [];
  });

  useEffect(() => {
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
  }, [selectedMovie]);

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const calculateTotalPrice = () => {
    if (selectedMovie) {
      return selectedSeats.length * selectedMovie.price;
    }
    return 0;
  };

  const handleMovieChange = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
    localStorage.removeItem("selectedMovie");
    localStorage.removeItem("selectedSeats");
  };

  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie: handleMovieChange,
        selectedSeats,
        setSelectedSeats,
        calculateTotalPrice,
        movies,
      }}>
      {children}
    </MovieContext.Provider>
  );
};
