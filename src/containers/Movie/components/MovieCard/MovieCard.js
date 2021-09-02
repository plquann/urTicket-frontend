import React from "react";
import "./MovieCard.scss";
import { ICONS } from "constants/image";
import PopupTrailer from "../PopupTrailer/PopupTrailer";
import MovieClassify from "../MovieClassify/MovieClassify";
import { useSelector } from "react-redux";
import { Skeleton } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const { loading } = useSelector((state) => state.home);
    return (
        <div className="movie__card">
            {loading ? (
                <>
                    <Skeleton
                        animation="wave"
                        variant="rect"
                        width="100%"
                        height={320}
                        style={{ backgroundColor: "#404146", marginBottom: 8 }}
                    />
                    <Skeleton
                        animation="wave"
                        variant="text" width="100%" height={30}
                        style={{ backgroundColor: "#404146", }}
                    />
                    <Skeleton
                        animation="wave"
                        variant="text" width="80%" height={30}
                        style={{ backgroundColor: "#404146", }}
                    />
                    <Skeleton
                        animation="wave"
                        variant="text" width="60%" height={30}
                        style={{ backgroundColor: "#404146", }}
                    />
                </>
            ) : (
                <div className="movie__card__wrapper">
                    <div className="movie__card__img relative">
                        <div href="/details" className="block">
                            <img
                                className="w-full h-full"
                                src={movie?.posterUrl}
                                alt="movie"
                            />
                        </div>
                        <PopupTrailer
                            open={
                                <button className="button movie__card__img__playTrailer">
                                    <i className="fa fa-play" id="viewTrailer" />
                                </button>
                            }
                            idVideo={movie?.trailerVideoUrl}
                        />
                    </div>
                    <Link to={`/movie/${movie?.id}`}>
                        <div className="movie__card__content">
                            <div className="movie__card__title">
                                <h5 className="line-clamp-2"> <MovieClassify classify={movie?.classify} /> {movie?.title}</h5>
                                <div className="">
                                    <span className=" text-sm text-gray-400">
                                        {movie?.duration} minutes
                                    </span>
                                </div>
                            </div>
                            {movie?.voteAverage
                                ?
                                <ul className="movie__card__rating">
                                    <li className="card__rating_item">
                                        <div className="flex items-center ">
                                            <img className="max-w-full" src={ICONS.TOMATO} alt="movie" />
                                        </div>
                                        <span className="font-semibold text-lg ml-2">
                                            {movie?.voteAverage * 10}%
                                        </span>
                                    </li>
                                    <li className="card__rating_item">
                                        <div className="flex items-center ">
                                            <img className="max-w-full" src={ICONS.CAKE} alt="movie" />
                                        </div>
                                        <span className="font-semibold text-lg ml-2">
                                            {movie?.voteAverage / 2}
                                        </span>

                                    </li>
                                </ul>
                                :
                                <p className="py-2">There are no reviews yet</p>
                            }
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}
