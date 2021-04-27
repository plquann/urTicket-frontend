import { randomGenres } from 'constants/genres';
import React from 'react';
import './CustomSlide.scss';
import { ICONS, MOVIE_EXPLORE } from 'constants/image';

export default function CustomSlide(props) {

    return (
        <div  {...props} >
            <div className="slide-explore bg-img" style={{ backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/rNqRoby4d3rr9QCnigVq2B-1024-80.jpeg.webp")` }}>
                <div className="bg w-1/2" />
                <div className="details w-1/2">
                    <h5 className="title line-clamp-2">
                        <a href="movie-details.html">Captain America: The First Avenger</a>
                    </h5>
                    <p className="duration">2hrs 50 min</p>
                    <p className="summary line-clamp-2">During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.</p>

                    <div className="genres my-3.5">
                        {randomGenres().map((genre, index) => {
                            return <a key={index} href="#0">{genre}</a>
                        })}
                    </div>

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
                    <div className="btn inline-flex space-x-4 mt-4 justify-center">
                        <button>Show more</button>
                        <button>Trailer</button>
                    </div>
                </div>
                <div className="illustration w-1/2">
                    <div className="inner bg-left-top bg-cover" style={{ backgroundImage: `url(${MOVIE_EXPLORE})` }}></div></div>
            </div>
        </div>
    )
}
