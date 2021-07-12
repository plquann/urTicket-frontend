import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Routes from 'Routes';
import './App.scss';
import "slick-carousel/slick/slick.css";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname])

//   return null;
// }

function App() {
  return (
    <div className="my__app">

      <Routes />

    </div>
  );
}

export default App;