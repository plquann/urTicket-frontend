import React, { useEffect } from 'react';
import Routes from 'Routes';
import './App.scss';
import "slick-carousel/slick/slick.css";
import { useDispatch } from 'react-redux';
import {
  fetchMoviesHighlight,
  fetchMoviesNowPlaying,
  fetchMoviesUpcoming
} from 'containers/Movie/Slice/homeSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesHighlight());
  }, [dispatch]);

  useEffect(() => {
    // console.log('userEffect now playing');
    dispatch(fetchMoviesNowPlaying());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMoviesUpcoming());
  }, [dispatch]);

  return (
    <div className="my__app">
      <Routes />
    </div>
  );
}

export default App;