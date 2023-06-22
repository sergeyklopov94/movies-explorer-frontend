import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesList from '../../constants/moviesList';
import { Routes, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  function handleBurgerMenuOpen(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <div className="app">
      <Routes>
          <Route path="/signup" element={
            <Register/>}
          />
          <Route path="/signin" element={
            <Login/>}
          />
          <Route path="/profile" element={
            <Profile
              onBurgerButtonClick={handleBurgerMenuOpen}
              isBurgerMenuOpen = {isBurgerMenuOpen}
            />}
          />
          <Route path="/movies" element={
            <Movies
              movies={moviesList}
              onBurgerButtonClick={handleBurgerMenuOpen}
              onBurgerLinkClick={handleBurgerMenuOpen}
              isBurgerMenuOpen = {isBurgerMenuOpen}
            />}
          />
          <Route path="/saved-movies" element={
            <SavedMovies
              movies={moviesList}
              onBurgerButtonClick={handleBurgerMenuOpen}
              onBurgerLinkClick={handleBurgerMenuOpen}
              isBurgerMenuOpen = {isBurgerMenuOpen}
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
