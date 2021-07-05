import React from 'react';
import { BANNER_BG } from 'constants/image';
import './MovieBackDrop.scss';

export default function MovieBackDrop() {
    return (
        <div 
            className="backdrop bg-img relative mt-20" 
            style={{ backgroundImage: `url(${BANNER_BG.BANNER_2})`, zIndex: '-1' , backgroundColor:'#032055'}} >
        </div>
    )
}
