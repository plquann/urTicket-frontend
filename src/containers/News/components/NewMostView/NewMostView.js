import React from 'react';
import './NewMostView.scss'

export default function NewMostView() {
    return (
        <div className="new-most-view -mt-10">
            <h1 className="new-most-view__title">MOST VIEWS</h1>
            <div className="new-most-view__list">
                <div className="new-most-view__list__item flex flex-wrap items-center mb-4">
                    <div className="related--1__img w-1/2">
                        <img src="https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=300,h=150//quill/7/c/8/2/c/c/7c82cc25c64eea3af42105dee2e85a96c0d7b0b0.jpg" alt="" />
                    </div>
                    <div className="related--1__wrapper w-1/2 pl-4">
                        <h5 className="line-clamp-4 font-medium" style={{ lineHeight: '22px' }}>
                            A Quiet Place Part 2 Streaming: How To Watch The Emily Blunt Movie
                        </h5>
                    </div>
                </div>
                <div className="new-most-view__list__item flex flex-wrap items-center mb-4">
                    <div className="related--1__img w-1/2">
                        <img src="https://img.cinemablend.com/cdn-cgi/image/fit=cover,w=300,h=150//quill/9/e/d/7/e/4/9ed7e4ff3c352f1774b6992d173e41f204e1f026.jpg" alt="" />
                    </div>
                    <div className="related--1__wrapper w-1/2 pl-4">
                        <h5 className="line-clamp-4 font-medium" style={{ lineHeight: '22px' }}>
                            Black Widow: What The Fans Are Saying About The Latest Marvel Movie
                        </h5>
                    </div>
                </div>
                <div className="new-most-view__list__item flex flex-wrap items-center mb-4">
                    <div className="related--1__img w-1/2">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTcyOTMyNzYtODQ0My00Y2YwLWIxYTQtNWRjNzJiMzRkMmRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX1200_CR0,0,1200,550_.jpg" alt="" />
                    </div>
                    <div className="related--1__wrapper w-1/2 pl-4">
                        <h5 className="line-clamp-4 font-medium" style={{ lineHeight: '22px' }}>
                            ‘Black Widow’ Smashes Pandemic Record With Huge $80 Million Domestic Opening
                        </h5>
                    </div>
                </div>
                <div className="new-most-view__list__item flex flex-wrap items-center mb-4">
                    <div className="related--1__img w-1/2">
                        <img src="https://img.cinemablend.com/filter:centercrop/quill/7/3/e/0/4/4/73e044c40cbd118501a9f046825b8ba4bb02a418.jpg?w=300&h=150" alt="" />
                    </div>
                    <div className="related--1__wrapper w-1/2 pl-4">
                        <h5 className="line-clamp-4 font-medium" style={{ lineHeight: '22px' }}>
                            The Suicide Squad's Idris Elba And Chris Hemsworth’s Extraction Director Are Teaming Up For A New Film,
                            And It Sounds Wild
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
