import React from 'react'
import { TabGroup } from '@statikly/funk';
import MovieGrid from '../MovieGrid'
import TabButton from '../TabButton';
import TabContent from '../TabContent';
import MovieItemCarousel from '../MovieItemCarousel';

export default function Tabs() {
    return (
        <div className="max-w-screen-lg mx-auto justify-center items-center">
            <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
                <TabGroup.TabList className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-5xl font-bold">MOVIES</p>
                        <p>Be sure not to miss these Movies today.</p>
                    </div>
                    <div className="flex justify-self-end">
                        {['NOW SHOWING', 'COMING SOON'].map((item, index) => {
                            return (
                                <TabButton index={index} title={item} />
                            )
                        })}
                    </div>
                </TabGroup.TabList>
                {[0, 1].map((item, index) => {
                    return (
                        <TabContent index={index} content={<MovieItemCarousel />} />
                    )
                })}
            </TabGroup>
        </div>
    )
}