import React from 'react';
import './Offer.scss';

export default function Offer(props) {
    const { photo, title, description } = props;
    return (
        <div className="offer rou">
            <div className="offer__logo flex items-center ">
                <img src={photo} alt={title} />
                <p className="font-medium ml-2">{title}</p>
            </div>
            <div className="offer__content">
                <span>{description}</span>
            </div>
        </div>
    )
}
