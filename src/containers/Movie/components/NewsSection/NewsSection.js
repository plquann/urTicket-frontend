import React from 'react';
// import './New.scss';
import TopNewLarge from 'containers/Movie/components/TopNewLarge';
import TopNewMedium from 'containers/Movie/components/TopNewMedium';
import RelatedNews from '../RelatedNews/RelatedNews';

export default function NewsSection() {
    return (
        <div className="news-section max-w-screen-lg mx-auto pb-8">
            <div className="news-section__title mb-12">
                <p className="text-5xl font-bold">NEWS</p>
                <p>Discover the hottest news recently</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="top1 col-span-2">
                    <TopNewLarge />
                </div>
                <div className="row-span-1">
                    <TopNewMedium rank='2' />
                </div>
                <div className="row-span-1">
                    <TopNewMedium rank='3' />
                </div>
            </div>
            <RelatedNews />
        </div>
    )
}
