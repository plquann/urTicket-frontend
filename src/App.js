import React, { useEffect } from 'react';
import Routes from 'Routes';
import './App.scss';
import "slick-carousel/slick/slick.css";
import { useDispatch } from 'react-redux';
import { refreshToken } from 'app/authSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [])

  return (
    <div className="my__app">
      <Routes />
    </div>
  );
}

export default App;