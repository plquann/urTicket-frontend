import Footer from 'components/Footer';
import Header from 'components/Header';
import { useScrollPosition } from 'hooks/useScrollPosition';
import React, { useState } from 'react';
import MovieCarousel from './components/MovieBannerCarousel';
import MovieSearch from './components/MovieSearch';
import Tabs from './components/Tabs';

export default function Movie() {
    const [hideOnScroll, setHideOnScroll] = useState(true);

    useScrollPosition(
        ({ prevPos, currPos }) => {
          const isShow = currPos.y > prevPos.y
          if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll],
        false,
        false,
        200
    )

    return (
        <div className="w-full" >
            <Header show={hideOnScroll}/>
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <div className="view-all text-center">
                <a href="/home">
                    <button className="bg-btn-gradient text-xl px-10 py-3 rounded-xl -mt-16 uppercase focus:outline-none">
                        View All
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    )
}
