import React from 'react';
import { classifyDesc } from 'utils/classifyDesc';
import MovieClassify from '../MovieClassify/MovieClassify';

export default function MovieInfo({ movie }) {
    return (
        <>
            <div className="info">
                <h3 className="title text-4xl mb-2 font-bold ">{movie?.title}</h3>
                <div className="tags text-lg my-4">
                    <MovieClassify classify={movie?.classify} styles={'font-medium'}/>
                    <span style={{  fontSize: '14px', marginLeft: '8px' }}>
                        {classifyDesc(movie.classify)}
                    </span>
                </div>

                <div className="genres mb-3.5">
                    {movie.genres.map((genre, index) => {
                        return (
                            <a key={index}
                                href="#0"
                                className="inline-block border border-solid text-xs font-medium uppercase px-3.5 py-2 rounded-md transition-all duration-300 ease-in-out mr-4"
                                style={{ borderColor: 'rgba(168,177,198,0.2)' }}
                            >
                                {genre.name}
                            </a>)
                    })}
                </div>
            </div>
            <div className="social__duration flex flex-wrap">
                <div className="duration-area flex flex-wrap space-x-2">
                    <div className="item mr-2 " >
                        <i className="fas fa-calendar-alt mr-1.5" /><span>{new Date(movie?.releaseDate).toDateString()}</span>
                    </div>
                    <div className="item">
                        <i className="far fa-clock mr-1.5" /><span>{movie.duration} minutes</span>
                    </div>
                </div>
                <ul className="social-share flex flex-wrap ml-auto">
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-facebook-f" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-twitter" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-pinterest-p" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-linkedin-in" /></a></li>
                    <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-google-plus-g" /></a></li>
                </ul>
            </div>
        </>
    )
}
