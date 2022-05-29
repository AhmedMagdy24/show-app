import './App.css';
import React from 'react';

import SearchMovies from "./searchMovies";

function App() {
  return (
    <div className="App">
   <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    </div>
  );
}

export default App;
