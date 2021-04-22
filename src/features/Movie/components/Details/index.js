import React from 'react'
import { TabGroup } from '@statikly/funk'
import Scenarios from '../Scenarios'
import Cast from '../Cast'
import Crew from '../Crew'
import ReviewDetails from '../ReviewDetails'

export default function Details() {
    return (
        <div className="max-w-full mx-auto">
            <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
                <TabGroup.TabList className="border-t border-b border-solid border-blue-900 ">
                    <TabGroup.Tab
                        index={0}
                        className="py-3 px-0 transition duration-800 font-semibold text-white mr-8 relative focus:outline-none"
                        activeClassName="border-t-2 border-b-2 border-green-400 "
                        inactiveClassName="text-black"
                    >
                        SUMMARY
                    </TabGroup.Tab>

                    <TabGroup.Tab
                        index={1}
                        className="py-3 px-0 transition duration-800 font-semibold text-white mr-8 relative focus:outline-none"
                        activeClassName="border-t-2 border-b-2 border-green-400 "
                        inactiveClassName="text-black"
                    >
                        USER REVIEWS (147)
                    </TabGroup.Tab>

                </TabGroup.TabList>

                <TabGroup.TabPanel
                    index={0}
                    className="transition-all transform h-64"
                    activeClassName="block opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute hidden -translate-x-2"
                >
                    <Scenarios />
                    <Cast />
                    <Crew />
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                    index={1}
                    className="transition-all transform h-64"
                    activeClassName="block opacity-100 duration-500 translate-x-0"
                    inactiveClassName="absolute hidden -translate-x-2"
                >
                    <ReviewDetails />
                    <ReviewDetails />
                    <ReviewDetails />
                    <ReviewDetails />
                    <ReviewDetails />
                </TabGroup.TabPanel>
            </TabGroup>
        </div>
    )
}