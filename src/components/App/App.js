import React from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import moviesList from '../../constants/moviesList';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  // временное решение для проверки активного состояния лайка
  const [isLiked, setSelectedMovie] = React.useState(false);

  function handleMovieClick() {
    if (!isLiked)
      setSelectedMovie(true);
    else setSelectedMovie(false);
  }

  return (
    <div className="App">
      <Routes>
          {/* <Route path="/sign-up" element={
            <Register/>} />
          <Route path="/sign-in" element={
            <Login/>} /> */}
          <Route path="/movies" element={
            <Movies
              movies={moviesList}
              isLiked={ isLiked }
              onCardLike={ handleMovieClick }
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
