import React from 'react';
import './NewMostView.scss';
import { news } from 'containers/News/_mocks_/newsData';

export default function NewMostView() {
    return (
        <div className="new-most-view -mt-10">
            <h1 className="new-most-view__title">MOST VIEWS</h1>
            <div className="new-most-view__list">
                {news.slice(news.length - 6).map((item, index) => (
                    <div key={item.id} className="new-most-view__list__item flex flex-wrap items-center mb-4">
                        <div className="related--1__img w-1/2 p-2">
                            <img src={item.imageUrl.replace('w=900,h=900','w=300,h=150')} alt="news thumbnails"/>
                        </div>
                        <div className="related--1__wrapper w-1/2 px-2">
                            <h5 className="line-clamp-5  -mt-1" style={{ lineHeight: '1.2rem' }}>
                                {item.title}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
