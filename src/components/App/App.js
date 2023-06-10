import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import moviesList from '../../constants/moviesList';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/signup" element={
            <Register/>}
          />
          {/* <Route path="/sign-in" element={
            <Login/>} /> */}
          <Route path="/movies" element={
            <Movies
              movies={moviesList}
            />}
          />
          <Route path="/saved-movies" element={
            <Movies
              movies={moviesList}
            />}
          />
          <Route path="/" element={
            <Main/> }/>
          <Route path="/*" element={<Navigate to="/" replace/>} />
        </Routes>
    </div>
  );
}

export default App;
