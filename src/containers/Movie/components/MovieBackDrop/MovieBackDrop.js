import React from 'react';
import './MovieBackDrop.scss';

export default function MovieBackDrop({ backdropUrl, ref, ...props }) {
    return (
        <div
            className="backdrop bg-img mt-16 relative "
            style={{ height: "500px", backgroundImage: `url(${backdropUrl})`, backgroundColor: '#000', zIndex: '-1' }} >
        </div>
    )
}
