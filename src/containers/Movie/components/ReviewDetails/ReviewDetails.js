import React from 'react';
import './ReviewDetails.scss';
import { CAST_PHOTO } from 'constants/image';
import { Verified, Like, Dislike, IconTrash } from 'components/Icons';
import { Rating } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AlertModal from 'components/AlertModal/AlertModal';
import { deleteReviewMovie } from 'containers/Movie/slices/movieSlide';

export default function ReviewDetails({ review }) {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { id, title, content, rating, author, createdDate } = review;

    const handleDelete = () => {
        dispatch(deleteReviewMovie(id));
    };
    return (
        <div className="review__details" style={{ background: '#1A222A' }}>
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
                <div className="review__details__content__footer">
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
                    {user && user.id === author?.id &&
                        <AlertModal
                            open={
                                <button className="btn__delete__review p-2 flex items-center bg-gray-700 rounded-md hover:bg-red-500 transition duration-300">
                                    <IconTrash width={22} height={22} fillColor="#fff" />
                                    <span className="ml-1 font-medium">Delete</span>
                                </button>
                            }
                            content="Are you sure you want to delete this review?"
                            onHandleConfirm={handleDelete}
                        />}

                </div>
            </div>
        </div>
    )
}
