import Icons from 'components/Icons';
import { CAST_PHOTO } from 'constants/image';
import React from 'react';
import './ReviewDetails.scss';

export default function ReviewDetails() {
    return (
        <div className="review__details">
            <div className="review__details__author">
                <div className="avatar">
                    <img src={CAST_PHOTO[0]} alt="audience" />
                </div>
                <div className="info">
                    <span className="reply-date mb-4">13 Days Ago</span>
                    <h6 className="text-lg mb-2 font-semibold text-white">TONY STARK</h6>
                    <div className="flex flex-wrap">
                        <Icons className="w-5 h-5 mr-1" name="Verified" fill="#31d7a9" />
                        <span>Verified Review</span>
                    </div>
                </div>
            </div>

            <div className="review__details__content">
                <div className="point mb-5 flex flex-wrap">
                    <Icons name="Heart" fill="#f1481f" />
                    <Icons name="Heart" fill="#f1481f" />
                    <Icons name="Heart" fill="#f1481f" />
                    <Icons name="Heart" fill="#f1481f" />
                    <Icons name="Heart" fill="#f1481f" />
                </div>
                <h6 className="text-lg font-semibold mb-2">Awesome Movie</h6>
                <p className="articles line-clamp-3">
                    In Tony's recording after the final battle he states that if someone told him 10 years ago
                    that we weren't alone in the universe he would find it difficult to believe.In the movie it is
                    established that the battle
                    of New York from The Avengers (2012) happened in 2012. Avengers: Infinity War (2018) happened in 2018,
                    and majority of Avengers: Endgame (2019) takes place 5 years later in 2023..
                </p>
                <div className="react">
                    <div className="like inline-flex space-x-1 items-center mr-6">
                        <Icons className="h-7 w-7" name="Like" fill="#31d7a9" />
                        <span>(8)</span>
                    </div>
                    <div className="dislike inline-flex space-x-1 items-center mr-6">
                        <Icons className="h-6 w-6 mt-2" name="Dislike" fill="#f1481f" />
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
