import React, { useEffect, useLayoutEffect, useState } from 'react';
import Page from 'components/Page/Page';
import PostLarge from 'containers/News/components/PostLarge/PostLarge';
import PostMedium from 'containers/News/components/PostMedium/PostMedium';
import NewTrailer from 'containers/News/components/NewsTrailers/NewsTrailer';
import PostMostView from 'containers/News/components/PostMostView/PostMostView';
import NewTrendingMovie from 'containers/News/components/TrendingMovie/TrendingMovie';
import { newsAPI } from 'apis';
import Pagination from 'components/Pagination/Pagination';
import Loading from 'components/Loading/Loading';


export default function MainNews() {
    const [news, setNews] = React.useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12,
        totalRows: 1
    });

    const [filters, setFilters] = useState({
        page: 1,
        limit: 13,
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await newsAPI.getAllNews(filters);
                console.log('🚀 ~ file: index.js ~ line 34 ~ res', res);
                setNews(res.news);
                setPagination({
                    page: filters.page,
                    limit: filters.limit,
                    totalRows: res.totalRow
                })
            } catch (error) {
                console.log('🚀 ~ file: index.js ~ line 35 ~ error', error);
            }
        };
        fetchNews();

    }, [filters]);

    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,
            page: newPage,
        });
    };

    const handleFiltersChange = (tag) => {
        setFilters({
            ...filters,
            page: 1,
            tag: tag,
        });
    };


    return (
        <Page title="News | UR-TICKET">
            {news.length
                ? <div className="news max-w-screen-xl mx-auto mt-20">
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="col-span-2">
                            {filters.tag
                                ? <h1 className=" flex items-center text-xl font-semibold uppercase tracking-wider mb-4 pb-2 italic">
                                    Article for 
                                    <span
                                        className="inline-block font-medium text-xs italic uppercase px-2 py-2 ml-1"
                                        style={{backgroundColor:' #df7e08'}}
                                    >
                                        {filters.tag}</span>
                                </h1>
                                : ''
                            }
                            <PostLarge data={news[0]} changeFilter={handleFiltersChange} />
                        </div>
                        <div className="col-span-1 pl-6">
                            <NewTrailer />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                {news.length ? news.slice(1).map((item, index) => (
                                    <PostMedium key={item.id} post={item} />
                                )) : ''}
                            </div>

                            <Pagination pagination={pagination} onPageChange={handlePageChange} />
                        </div>
                        <div className="col-span-1 pl-6">
                            <PostMostView />
                            <NewTrendingMovie />
                        </div>
                    </div>
                </div>
                : <Loading />
            }
        </Page>
    )
}
