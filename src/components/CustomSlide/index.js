import { ICONS } from 'constants/image'
import React from 'react';
import './CustomSlide.scss';

export default function CustomSlide(props) {

    return (
        <div  {...props} >
            <div className="slide-explore bg-img" style={{ backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/rNqRoby4d3rr9QCnigVq2B-1024-80.jpeg.webp")` }}>
                <div className="bg w-1/2" />
                <div className="details w-1/2">
                    <h5 className="title line-clamp-1">
                        <a href="movie-details.html">Captain America: The First Avenger</a>
                    </h5>
                    <p className="duration">2hrs 50 min</p>
                    <div className="release">
                        <span>Release Date : </span> <a href="#0"> November 8 , 2020</a>
                    </div>
                    <ul className="rating">
                        <li className="item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.TOMATO} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">88%</span>
                        </li>
                        <li className="item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.CAKE} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">88%</span>
                        </li>
                    </ul>
                    <div className="btn inline-flex space-x-4">
                        <button>Show more</button>
                        <button>Trailer</button>
                    </div>
                </div>
                <div class="illustration w-1/2"><div class="inner"></div></div>
            </div>
        </div>
    )
}
