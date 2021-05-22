import React from 'react';
import './New.scss';
import TopNewLarge from 'features/Movie/components/TopNewLarge';
import TopNewMedium from 'features/Movie/components/TopNewMedium';

export default function News() {
    return (
        <div className="news max-w-screen-xl mx-auto py-8">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 auto-rows-max">
                <div className="top1 row-span-2">
                    <TopNewLarge />
                </div>
                <div className="row-span-1">
                    <TopNewMedium rank='2' />
                </div>
                <div className="row-span-1">
                    <TopNewMedium rank='3' />
                </div>
            </div>
        </div>
    )
}
