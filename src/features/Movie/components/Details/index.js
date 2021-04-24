import React from 'react'
import { TabGroup } from '@statikly/funk'
import Scenarios from '../Scenarios'
import Cast from '../Cast'
import Crew from '../Crew'
import ReviewDetails from '../ReviewDetails'

export default function Details() {
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
                        USER REVIEWS (147)
                    </TabGroup.Tab>

                </TabGroup.TabList>

                <TabGroup.TabPanel
                    index={0}
                    className="transition-all transform ease-in-out"
                    activeClassName="opacity-100 duration-1000 translate-x-0 "
                    inactiveClassName="absolute opacity-0 -translate-x-2 top-0 -left-full w-full"
                >
                    <div className="content">
                        <Scenarios />
                        <Cast />
                        <Crew />
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