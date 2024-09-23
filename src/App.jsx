import React from "react";
import Navbar from "./components/navbar";
import FeaturedMovies from "./components/featuredMovies";
import ListData from "./components/listdata";
import "./App.css";

function App() {
  const movies = [
    {
      name: "Spy Family",
      episode: "Tập 1",
      image: "./images/spyxfamily1.jpg",
    },
    {
      name: "Lật Mặt",
      episode: "Tập 2",
      image: "./images/latmat7-2.jpg",
    },

    { name: "Hai Phượng", episode: "Tập 3", image: "./images/haiphuong3.jpg" },
    {
      name: "Harry Potter",
      episode: "Tập 5",
      image: "./images/harrypotter4.jpg",
    },
    { name: "Naruto", episode: "Tập 1", image: "./images/naruto5.jpg" },
    {
      name: "Beauty & The Beast",
      episode: "Tập 4",
      image: "./images/Beauty&The Beast6.jpg",
    },
    {
      name: "Titanic",
      episode: "Tập 2",
      image: "./images/Titanic7.jpg",
    },
  ];

  return (
    <div className="App bg-gradient-to-b from-blue-900 to-indigo-900 min-h-screen">
      <Navbar />
      <FeaturedMovies />
      <ListData movies={movies} />
    </div>
  );
}

export default App;
