import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";

const API_KEY = "a5dedf06";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return;
    const res = await axios.get(`https://www.omdbapi.com/`, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });

    if (res.data.Search) {
      setMovies(res.data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">🎬 Movie Search App</h1>
      <div className="flex gap-2 justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded-md text-black w-80"
        />
        <button
          onClick={searchMovies}
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
