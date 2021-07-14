import React from 'react';
import {Dislike, Like} from 'components/Icons'
import { CAST_PHOTO } from 'constants/image'
import './Comment.scss'

export default function Comment(props) {
    return (
        <div className="comment my-4">
            <div className="comment__avatar">
                <img src={CAST_PHOTO[0]} alt="audience" />
            </div>
            <div className="comment__wrapper">
                <div className="comment__wrapper__author">
                    Chris Smith
                </div>
                <div className="comment__wrapper__content">
                    <p className="line-clamp-2" style={{lineHeight:'1.25rem'}}>
                        In Tony's recording after the final battle he states that if
                        someone told him 10 years ago that we weren't alone in the
                        universe he would find it difficult to believe.In the movie
                        it is established that the battle of New York from The Avengers (2012).
                    </p>
                </div>
                <div className="comment__wrapper__react">
                    <div className="like inline-flex space-x-1 items-center mr-6">
                        <Like className="h-5 w-5" fill="#31d7a9" />
                        <span>(8)</span>
                    </div>
                    <div className="dislike inline-flex space-x-1 items-center mr-6">
                        <Dislike className="h-4 w-4 mt-2" fill="#f1481f" />
                        <span>(2)</span>
                    </div>
                    <div className="report flex items-center">
                        <p >Reply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
