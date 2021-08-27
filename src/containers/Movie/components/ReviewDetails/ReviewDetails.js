import React from 'react';
import './ReviewDetails.scss';
import { CAST_PHOTO } from 'constants/image';
import { Verified, Like, Dislike } from 'components/Icons';
import { Rating } from '@material-ui/core';

export default function ReviewDetails({ review }) {
    const { id, title, content, rating, author, createdDate } = review;
    return (
        <div className="review__details" style={{background: '#1A222A'}}>
            <div className="review__details__author">
                <div className="avatar">
                    {author?.avatar
                        ? <img src={author.avatar} alt="avatar" />
                        : <img src={CAST_PHOTO[0]} alt="audience" />
                    }
                </div>
                <div className="info text-center mt-2">
                    <h6 className="text-lg mb-2 font-semibold text-white">{author?.userName}</h6>
                    <div className="flex flex-wrap justify-center">
                        <Verified className="w-5 h-5 mr-1" fill="#31d7a9" />
                        <span>Verified Review</span>
                    </div>
                    <span className="reply-date mt-6">{new Date(createdDate).toDateString()}</span>
                </div>
            </div>

            <div className="review__details__content">
                <div className="point mb-2 flex flex-wrap">
                    <Rating name="read-only" precision={0.5} value={rating / 2} readOnly />
                </div>
                <h6 className="text-lg font-semibold mb-2">{title}</h6>
                <p className="articles line-clamp-5">{content}</p>
                <div className="react">
                    <div className="like inline-flex space-x-1 items-center mr-6">
                        <Like width={22} height={22} fillColor="#31d7a9" />
                        <span>(8)</span>
                    </div>
                    <div className="dislike inline-flex space-x-1 items-center mr-6">
                        <Dislike width={22} height={22} fillColor="#f1481f" />
                        <span>(2)</span>
                    </div>
                    <div className="report flex items-center">
                        <p >Report Abuse</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
