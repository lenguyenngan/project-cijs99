import React from "react";

const ListData = ({ movies }) => {
  return (
    <section className="flex justify-around flex-wrap p-6 bg-gradient-to-b from-blue-900 to-indigo-900">
      {movies.map((movie, index) => (
        <div className="movie-item text-center mb-6" key={index}>
          <img
            src={movie.image}
            alt={movie.name}
            className="w-32 h-48 rounded-lg mb-4 shadow-lg"
          />
          <div className="movie-details text-white">
            <p className="text-lg font-bold">{movie.name}</p>
            <p className="text-sm opacity-75">Episode: {movie.episode}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListData;
