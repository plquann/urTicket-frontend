import React, { useEffect, useState } from 'react';
import './Tabs.scss';
import MovieItemCarousel from '../MovieItemCarousel/MovieItemCarousel';
import { useDispatch } from 'react-redux';
import { fetchMoviesNowPlaying, fetchMoviesUpcoming } from 'containers/Movie/Slice/homeSlice';

export default function Tabs(props) {
    const [activeTab, setActiveTab] = useState('nowplaying');
    console.log('🚀 ~ file: Tabs.js ~ line 9 ~ activeTab', activeTab);


    const handleChangeTabs = (tab) => {
        setActiveTab(tab);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesUpcoming());
    }, []);

    useEffect(() => {
        dispatch(fetchMoviesNowPlaying());
    }, []);

    const { movieNowPlaying, movieUpcoming } = props;

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
            {/* <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
                <TabGroup.TabList className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-5xl font-bold">MOVIES</p>
                        <p>Be sure not to miss these movies today</p>
                    </div>
                    <div className="flex justify-self-end">
                        {['NOW SHOWING', 'COMING SOON'].map((item, index) => {
                            return (
                                <TabGroup.Tab
                                    // key={index + item}
                                    index={index}
                                    className="px-6 mb-6 font-bold uppercase rounded-xl transition ease-in duration-300 mx-2 focus:outline-none hover:shadow-btn-shadow"
                                    activeClassName="bg-btn-gradient"
                                    inactiveClassName="text-white"
                                    style={{ border: "1px solid #11326f" }}
                                >
                                    {item}
                                </TabGroup.Tab>
                            )
                        })}
                    </div>
                </TabGroup.TabList>
               <div className="div">
                    <TabGroup.TabPanel
                    index={0}
                    className="pt-12 pb-8 transition transform duration-700 "
                    activeClassName="opacity-100 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <MovieItemCarousel movies={movieNowPlaying} />
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                    index={1}
                    className="pt-12 pb-8 transition transform duration-700 "
                    activeClassName="opacity-100 translate-x-0"
                    inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                    <MovieItemCarousel movies={movieUpcoming} />
                </TabGroup.TabPanel>
               </div>
            </TabGroup> */}
        </div >
    )
}