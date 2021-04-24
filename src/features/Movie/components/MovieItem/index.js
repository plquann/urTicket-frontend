import React from 'react';
import './MovieItem.scss';
import { MOVIE_IMG, ICONS } from 'constants/image';
import { randomGenres } from 'constants/genres';

export default function MovieItem() {
    return (
        <div className="movie__item max-w-screen-lg mx-auto mt-5">
            <div className="movie__item__thumb c-thumb">
                <a href="movie-details.html" className="w-100" >
                    <img className="w-100 h-100 bg-img rounded-t-md" src={MOVIE_IMG[Math.floor(Math.random() * 11)]} alt="movie" />
                </a>
            </div>
            <div className="movie__item__content h-100">
                <h5 className="title line-clamp-1">
                    <a href="movie-details.html">Captain America: The First Avenger</a>
                </h5>
                <p className="duration">2hrs 50 min</p>
                <p className="summary line-clamp-2">During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.</p>
               
                <div className="genres">
                    {randomGenres().map((genre, index) => {
                        return <span key={index}>{genre}</span>
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
                <div className="booking">
                    <div className="book-ticket grid grid-cols-4 gap-4">
                        <div className="react-item">
                            <a href="#0">
                                <div className="thumb">
                                    <img src={ICONS.HEART} alt="icons" />
                                </div>
                                <span>Like</span>
                            </a>
                        </div>
                        
                        <div className="react-item">
                            <a href="#0" className="popup-video">
                                <div className="thumb">
                                    <img src={ICONS.PLAY_BTN} alt="icons" />
                                </div>
                                <span>Watch trailer</span>
                            </a>
                        </div>

                        <div className="react-item col-start-4">
                            <a href="#0">
                                <div className="thumb">
                                    <img src={ICONS.BOOK} alt="icons" />
                                </div>
                                <span>book ticket</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
