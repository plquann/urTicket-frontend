import React from 'react';
import Page from 'components/Page/Page';
import NewLarge from 'containers/News/components/NewLarge/NewLarge';
import NewMedium from 'containers/News/components/NewMedium/NewMedium';
import NewTrailer from 'containers/News/components/NewTrailer/NewTrailer';
import NewMostView from 'containers/News/components/NewMostView/NewMostView';

export default function MainNews() {
    return (
        <Page title="News | UR-TICKET">
            <div className="news max-w-screen-xl mx-auto mt-20">
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <NewLarge />
                    </div>
                    <NewTrailer />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-6">
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                        </div>
                    </div>
                    <NewMostView />
                </div>
            </div>
        </Page>
    )
}
