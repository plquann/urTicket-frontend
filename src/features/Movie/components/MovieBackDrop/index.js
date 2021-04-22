import React from 'react';
import { BANNER_BG } from 'constants/Image';
import './MovieBackDrop.scss';

export default function MovieBackDrop() {
    return (
        <div className="backdrop bg-img" style={{ backgroundImage: `url(${BANNER_BG.BANNER_2})` }} >

        </div>
    )
}
