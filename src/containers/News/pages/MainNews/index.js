import React from 'react';
import './New.scss';
import Page from 'components/Page/Page';
import NewLarge from 'containers/News/components/NewLarge/NewLarge';
import NewMedium from 'containers/News/components/NewMedium/NewMedium';
import NewTrailer from 'containers/News/components/NewTrailer/NewTrailer';

export default function MainNews() {
    return (
        <Page title="News | UR-TICKET">
            <div className="news max-w-screen-xl mx-auto mt-20">
                <div className="grid grid-cols-3 gap-6">
                    <div className="left col-span-2">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="news-latest col-span-2 ">
                                <h1 className="news-latest__title">Latest News</h1>
                            </div>
                            <div className="col-span-3">
                                <NewLarge />
                            </div>
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
                    <div className="right">
                        <NewTrailer />
                    </div>
                </div>
            </div>
        </Page>
    )
}
