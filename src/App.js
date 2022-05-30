import './App.css';
import React from 'react';
import SearchMovies from "./searchMovies";
import Shows from "./shows";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
   
    <BrowserRouter> 
      <div className="App">
      <div className="container">
          <h1 className="title">React Movie Search</h1>
        <Routes>
          <Route path="/" element={<SearchMovies />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
        </div>
      </div>
      </BrowserRouter>
       
    
  );
}




/* 

       
        
        
        <SearchMovies />
        <Shows />
      
  

*/
