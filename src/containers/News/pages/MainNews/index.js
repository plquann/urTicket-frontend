import React from 'react';
import './New.scss';
import TopNewLarge from 'containers/Movie/components/TopNewLarge/TopNewLarge';
import TopNewMedium from 'containers/Movie/components/TopNewMedium/TopNewMedium';
import Page from 'components/Page/Page';

export default function MainNews() {
    return (
        <Page title="News | UR-TICKET">
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
        </Page>
    )
}
