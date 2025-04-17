import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="mb-3 w-full h-64 object-cover rounded"
      />
      <h2 className="text-xl font-bold">{movie.Title}</h2>
      <p className="text-gray-300">{movie.Year} | {movie.Type}</p>
    </div>
  );
};

export default MovieCard;
