import React from 'react';
import  './Loading.css';

export default function Loading() {
    return (
        <div>
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span ></span>
                        <span ></span>
                    </div>
                </div>
            </div>

            <div className="overlay" ></div>          
        </div>
    )
}
