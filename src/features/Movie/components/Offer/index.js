import React from 'react';
import './Offer.scss';

export default function Offer(props) {
    const { photo, title, description } = props;
    return (
        <div className="offer rou">
            <div className="offer__logo">
                <img src={photo} alt={title} />
            </div>
            <div className="offer__content">
                <p>{title}</p>
                <span>{description}</span>
            </div>
        </div>
    )
}
