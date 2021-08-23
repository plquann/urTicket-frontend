import React from 'react';
import { TabGroup } from '@statikly/funk';
import MovieItemCarousel from '../MovieItemCarousel/MovieItemCarousel';

export default function Tabs(props) {

    const { movieNowPlaying, movieUpcoming } = props;

    return (
        <div className="max-w-screen-lg mx-auto justify-center items-center">
            <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
                <TabGroup.TabList className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-5xl font-bold">MOVIES</p>
                        <p>Be sure not to miss these Movies today</p>
                    </div>
                    <div className="flex justify-self-end">
                        {['NOW SHOWING', 'COMING SOON'].map((item, index) => {
                            return (
                                <TabGroup.Tab
                                    key={index}
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
            </TabGroup>
        </div>
    )
}