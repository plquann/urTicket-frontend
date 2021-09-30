import Medal from 'components/Medal/Medal'
import dateFormat from 'dateformat';
import React from 'react';
import { Link } from 'react-router-dom';
import './TopNewMedium.scss'

export default function TopNewMedium({ news, rank }) {
    return (
        <div className="top-new-medium">
            <Link to={`/news/${news?.id}`}>
                <div className="top-new-medium__thumbnails">
                    <img src={news?.image} alt="" />
                </div>
                <div className="top-new-medium__title" >
                    <h2 className="line-clamp-2">{news?.title}</h2>

                    <p className="mt-4">
                        {new Date(news?.publishedDate).toDateString()}
                        <span className="text-lg font-bold mx-2"> |</span>
                        <span className="font-medium">{news?.author.name}</span>
                    </p>
                </div>
                <div className="top-new-medium__ranking">
                    <Medal rank={rank} />
                </div>
            </Link>
        </div>
    )
}
