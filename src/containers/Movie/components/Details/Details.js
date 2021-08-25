import React from 'react'
import { TabGroup } from '@statikly/funk'
import ReviewDetails from '../ReviewDetails/ReviewDetails'
import CustomCarousel from 'components/CustomCarousel/CustomCarousel'
import { useSelector } from 'react-redux'

export default function Details({ casts, crews, movieDesc, ...props }) {
    const { movieDetails } = useSelector(state => state.movie);

    return (
        <div className="details__tab w-full">
            <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
                <TabGroup.TabList className="h-14 mb-5 border-t border-b border-solid border-blue-900 ">
                    <TabGroup.Tab
                        index={0}
                        className="h-full transition duration-800 font-semibold text-white mr-8 relative focus:outline-none"
                        activeClassName="border-t-2 border-b-2 border-green-400 "
                        inactiveClassName="text-black"
                    >
                        SUMMARY
                    </TabGroup.Tab>

                    <TabGroup.Tab
                        index={1}
                        className="h-full transition duration-800 font-semibold text-white mr-8 relative focus:outline-none"
                        activeClassName="border-t-2 border-b-2 border-green-400 "
                        inactiveClassName="text-black"
                    >
                        USER REVIEWS
                    </TabGroup.Tab>

                </TabGroup.TabList>

                <TabGroup.TabPanel
                    index={0}
                    className="transition-all transform ease-in-out"
                    activeClassName="opacity-100 duration-1000 translate-x-0 "
                    inactiveClassName="absolute opacity-0 -translate-x-2 top-0 -left-full w-full"
                >
                    <div className="content">
                        <div className="scenarios mb-12">
                            <h3 className="text-2xl mb-4 font-semibold">SCENARIOS</h3>
                            <p className="" style={{ color: '#dbe2fb', fontSize: '16px' }}>{movieDetails?.description}</p>
                        </div>
                        <div className="cast mb-4 w-full h-auto">
                            <div className="title pb-3 mb-10" style={{ borderBottom: '1px dashed #11326f' }}>
                                <h3 className="text-2xl font-semibold">CASTS</h3>
                            </div>
                            <CustomCarousel data={movieDetails.casts} />
                        </div>
                        <div className="crew mb-4 w-full">
                            <div className="title pb-3 mb-10" style={{ borderBottom: '1px dashed #11326f' }}>
                                <h3 className="text-2xl font-semibold">CREWS</h3>
                            </div>
                            <CustomCarousel data={movieDetails.crews} />
                        </div>
                    </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                    index={1}
                    className="transition-all transform ease-in-out"
                    activeClassName=" opacity-100 duration-1000 translate-x-0 "
                    inactiveClassName="absolute opacity-0 -translate-x-2 top-0 -left-full w-full"
                >
                    <div className="content">
                        <ReviewDetails />
                    </div>

                </TabGroup.TabPanel>
            </TabGroup>
        </div>
    )
}