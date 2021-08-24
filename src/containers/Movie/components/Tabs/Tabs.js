import React, { useState } from 'react';
import './Tabs.scss';
import { useSelector } from 'react-redux';
import MovieItemCarousel from '../MovieItemCarousel/MovieItemCarousel';

export default function Tabs(props) {
    const [activeTab, setActiveTab] = useState('nowplaying');
    const { movieNowPlaying, movieUpcoming } = useSelector(state => state.home)

    const handleChangeTabs = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="movies-tabs max-w-screen-lg mx-auto justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className=" text-5xl font-bold">MOVIES</p>
                    <p>Be sure not to miss these movies today</p>
                </div>
                <div className="flex justify-self-end">
                    <button
                        className={activeTab === 'nowplaying' ? 'movies-tabs__button' : 'movies-tabs__button selected'}
                        style={{ border: "1px solid #11326f" }}
                        onClick={() => handleChangeTabs('nowplaying')}
                    >
                        <span>NOW PLAYING</span>
                    </button>

                    <button
                        className={activeTab === 'nowplaying' ? 'movies-tabs__button selected' : 'movies-tabs__button '}
                        style={{ border: "1px solid #11326f" }}
                        onClick={() => handleChangeTabs('upcoming')}
                    >
                        <span>UPCOMING</span>
                    </button>
                </div>
            </div>
            {activeTab === 'nowplaying'
                ? <div className="movies-tabs__nowplaying">
                    <MovieItemCarousel movies={movieNowPlaying} />
                </div>
                : <div className="movies-tabs__upcoming">
                    <MovieItemCarousel movies={movieUpcoming} />
                </div>
            }
        </div>
    )
}