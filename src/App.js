import './App.css';
import React from 'react';
import SearchMovies from "./searchMovies";
import Shows from "./shows";


export default function App() {
  return (
      <div className="App">
        <div className="container">
          <h1 className="title">React Movie/Show Search</h1>
          <Shows />
          <SearchMovies />
          </div>
      </div>  
  );
}




