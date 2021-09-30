import React from 'react';
import './PostMostView.scss';
import { newsAPI } from 'apis';
import { Link } from 'react-router-dom';

export default function PostMostView({ idArticle = '' }) {
    const [postMostView, setPostMostView] = React.useState([]);

    React.useEffect(() => {
        const fetchPostMostView = async () => {
            try {
                const result = await newsAPI.getPopularNews();
                setPostMostView(result);
            } catch (error) {
                console.log('🚀 ~ file: PostMostView.js ~ line 15 ~ error', error);
            }
        };
        fetchPostMostView();
    }, []);

    return (
        <div className="post-most-view -mt-2 mb-4">
            <h1 className="post-most-view__title">MOST VIEWS</h1>
            <div className="post-most-view__list">
                {postMostView.length ? postMostView.filter(item => item.id !== idArticle).map((item, index) => (
                    <Link to={`/news/${item?.id}`} key={item?.id}>
                        <div className="post-most-view__list__item flex flex-wrap items-center mb-4">
                            <div className="related--1__img w-1/2 p-2">
                                <img
                                    src={item?.image}
                                    alt="news thumbnails"
                                    style={{ width: '300px', height: '100px', objectFit: 'cover', objectPosition: '0% 10%' }}
                                />
                            </div>
                            <div className="related--1__wrapper w-1/2 px-2">
                                <h5 className="line-clamp-3 -mt-1 font-medium" style={{ lineHeight: '1.5rem' }}>
                                    {item?.title}
                                </h5>
                            </div>
                        </div>
                    </Link>
                )) : ''}
            </div>
        </div>
    )
}
