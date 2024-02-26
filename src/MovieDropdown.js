import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContext";

const MovieDropdown = () => {
  const { selectedMovie, setSelectedMovie, movies } = useContext(MovieContext);

  const handleChange = (event) => {
    const selectedMovieId = parseInt(event.target.value);
    const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);
    localStorage.setItem("loggedIn", true);
    setSelectedMovie(selectedMovie);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center">
        <div className="card-body">
          <h2 className=" card-title text-center mb-4">Movie Selection</h2>
          <div className="form-group">
            <label htmlFor="movieDropdown" className="form-label">
              Movies Dropdown:
            </label>

            <select
              id="movieDropdown"
              className="form-select custom-select"
              onChange={handleChange}>
              <option value="">Select Movie</option>
              {movies.map((movie) => (
                <option key={movie.id} value={movie.id}>
                  {movie.title} - Price: {movie.price}
                </option>
              ))}
            </select>
            {selectedMovie && (
              <Link to="/booking" className="btn btn-primary">
                Proceed to Booking
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDropdown;
