import React from 'react';
import './PostMostView.scss';
import { news } from 'containers/News/_mocks_/newsData';

export default function PostMostView() {
    return (
        <div className="post-most-view -mt-2 mb-4">
            <h1 className="post-most-view__title">MOST VIEWS</h1>
            <div className="post-most-view__list">
                {news.slice(news.length - 6).map((item, index) => (
                    <div key={item.id} className="post-most-view__list__item flex flex-wrap items-center mb-4">
                        <div className="related--1__img w-1/2 p-2">
                            <img src={item.imageUrl.replace('w=900,h=900','w=300,h=150')} alt="news thumbnails"/>
                        </div>
                        <div className="related--1__wrapper w-1/2 px-2">
                            <h5 className="line-clamp-3 -mt-1 font-medium" style={{ lineHeight: '1.5rem' }}>
                                {item.title}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
