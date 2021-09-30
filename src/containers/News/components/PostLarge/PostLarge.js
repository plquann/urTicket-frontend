import React from 'react';
import { Link } from 'react-router-dom';
import './PostLarge.scss';

export default function PostLarge({ data, changeFilter }) {
    return (
        <div className="post-large">
            <h1 className="post-large__title">Latest News</h1>

            <div className="post-large__wrapper">
                <div className="post-large__wrapper__thumbnails">
                    <img className="w-full h-full" src={data?.image} alt="thumbnails"
                        style={{ width: '100%', objectFit: 'fill', objectPosition: '0% 10%' }} />

                </div>
                <div className="post-large__wrapper__content">
                    <div className="post-large__wrapper__content__category mb-4">
                        {data.tags.map((item, index) => (
                            <span
                                key={index}
                                onClick={() => changeFilter(item)}
                            >
                                {item}
                            </span>
                        ))}

                    </div>
                    <Link to={`/news/${data.id}`}><h2 className="line-clamp-4">{data.title}</h2></Link>
                    <p className="post-large__wrapper__content__subtitle line-clamp-5 text-gray-400">
                        {data.paragraphs[0]}
                    </p>
                    <div className="post-large__wrapper__content__info flex flex-wrap justify-between items-center mt-2">
                        <span className="font-medium">{data.author.name}</span>
                        <p className="text-xs text-right"> {new Date(data.publishedDate).toDateString()}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
