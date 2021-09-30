import React from 'react';
import Medal from 'components/Medal/Medal';
import dateFormat from 'dateformat';
import './TopNewLarge.scss';
import { Link } from 'react-router-dom';

export default function TopNewLarge({ news }) {
    return (
        <>
            <Link to={`news/${news?.id}`}>
                <div className="top-new-large mt-2">
                    <div className="top-new-large__thumbnails">
                        <img className="w-full" src={news?.image} alt="" />
                    </div>
                    <div className="top-new-large__title">
                        <h2 className="line-clamp-4">{news?.title}</h2>
                        <p className="subtitle line-clamp-6 text-gray-400">
                            {news?.paragraphs[0]}
                        </p>
                        <div className="flex flex-wrap justify-between items-center pr-4 mt-4">
                            <p>{dateFormat(news?.publishedDate, 'fullDate')}</p>
                        </div>
                        <p className="font-medium">{news?.author.name}</p>
                    </div>
                    <div className="top-new-large__ranking ">
                        <Medal rank='1' />
                    </div>
                </div>
            </Link>
        </>
    )
}
