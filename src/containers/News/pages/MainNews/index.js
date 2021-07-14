import React from 'react';
import Page from 'components/Page/Page';
import PostLarge from 'containers/News/components/PostLarge/PostLarge';
import PostMedium from 'containers/News/components/PostMedium/PostMedium';
import NewTrailer from 'containers/News/components/NewsTrailers/NewsTrailer';
import PostMostView from 'containers/News/components/PostMostView/PostMostView';
import NewTrendingMovie from 'containers/News/components/TrendingMovie/TrendingMovie';
import BoxOffice from 'components/BoxOffice/BoxOffice';

import { news } from 'containers/News/_mocks_/newsData';

export default function MainNews() {
    return (
        <Page title="News | UR-TICKET">
            <div className="news max-w-screen-xl mx-auto mt-20">
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <PostLarge />
                    </div>
                    <div className="col-span-1 pl-6">
                        <NewTrailer />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-6">
                            {news.slice(0, 12).map((item, index) => (
                                <PostMedium key={item.id} post={item} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 pl-6">
                        <PostMostView />
                        <NewTrendingMovie />
                    </div>
                </div>
                <div className="news__box-office">
                    <BoxOffice />
                </div>
            </div>
        </Page>
    )
}
