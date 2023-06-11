import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import moviesList from '../../constants/moviesList';
import { Routes, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/signup" element={
            <Register/>}
          />
          <Route path="/signin" element={
            <Login/>}
          />
          <Route path="/profile" element={
            <Profile/>}
          />
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
            <Main/>}
          />
          <Route path="/*" element={
            <PageNotFound/>}
          />
        </Routes>
    </div>
  );
}

export default App;
