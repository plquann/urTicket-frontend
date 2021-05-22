import React from 'react';
import './Medal.scss';

export default function Medal(props) {
    const { rank } = props;

    return (
        <div className="quiz-medal">
            <div className="quiz-medal__circle quiz-medal__circle quiz-medal__circle--bronze">
                <span>
                    {rank}
                </span>
            </div>
            <div className="quiz-medal__ribbon quiz-medal__ribbon--left" />
            <div className="quiz-medal__ribbon quiz-medal__ribbon--right" />
        </div>

    )
}
