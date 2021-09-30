import React from 'react';
// import './New.scss';
import TopNewLarge from 'containers/Movie/components/TopNewLarge/TopNewLarge';
import TopNewMedium from 'containers/Movie/components/TopNewMedium/TopNewMedium';
import RelatedNews from '../RelatedNews/RelatedNews';
import { newsAPI } from 'apis'

export default function NewsSection() {

    const [news, setNews] = React.useState([]);

    React.useEffect(() => {
        const fetchPopularNews = async () => {
            try {
                const news = await newsAPI.getPopularNews();
                setNews(news);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPopularNews();
    }, []);


    return (
        <div className="news-section max-w-screen-lg mx-auto pb-8">
            <div className="news-section__title mb-12">
                <p className="text-5xl font-bold">NEWS</p>
                <p>Discover the hottest news recently</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="top1 col-span-2">
                    <TopNewLarge news={news[0]} />
                </div>
                <div className="row-span-1">
                    <TopNewMedium rank='2' news={news[1]}  />
                </div>
                <div className="row-span-1">
                    <TopNewMedium rank='3' news={news[2]} />
                </div>
            </div>
            <RelatedNews />
        </div>
    )
}
