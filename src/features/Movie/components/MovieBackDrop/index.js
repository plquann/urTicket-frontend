import React from 'react';
import { BANNER_BG } from 'constants/Image';

export default function MovieBackDrop() {
    return (
        <div className="backdrop w-full relative top-0 left-0 bg-img" style={{ backgroundImage: `url(${BANNER_BG.BANNER_2})`, backgroundPosition: '50% 0', height: '500px'}}>
            
        </div>
    )
}
