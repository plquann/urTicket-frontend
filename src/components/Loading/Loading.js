import React from 'react';
import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading__preloader">
                <div className="loading__inner">
                    <div className="loading__icon">
                        <span className="loading__icon--item"></span>
                        <span className="loading__icon--item"></span>
                    </div>
                </div>
            </div>

            <div className="loading__overlay" ></div>
        </div>
    )
}
