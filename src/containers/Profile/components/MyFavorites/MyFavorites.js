import React from 'react';
import './MyFavorites.scss'
import { movieFavorites } from 'containers/Profile/_mocks_/profile';
import { IconCinema, IconTrash } from 'components/Icons';
import { Rating } from '@material-ui/core';
import PopupTrailer from 'containers/Movie/components/PopupTrailer/PopupTrailer';

export default function MyFavorites() {
    return (
        <div className="favorites">
            <div className="grid grid-cols-2 gap-6">
                {movieFavorites.map((movie, index) => (
                    <div key={index + movie.id} className="favorites__item">
                        <div className="favorites__item__thums">
                            <img src={movie.img} alt="movie thumbnails" />
                        </div>
                        <div className="favorites__item__wrapper">
                            <div className="favorites__item__wrapper__date ">
                                <IconCinema width={20} height={20} fillColor={'#ffc033'} />
                                <p>{movie.releaseDate}</p>
                            </div>
                            <h1 className="favorites__item__wrapper__title ">{movie.title}</h1>
                            <p className="favorites__item__wrapper__desc">{movie.desc}</p>
                            <div className="mt-4">
                                <Rating name="read-only" precision={0.5} value={movie.rating} readOnly />
                            </div>
                            <div className="favorites__item__wrapper__btn mt-4">
                                <PopupTrailer
                                    open={<button className="btn__trailer">TRAILER</button>}
                                    idVideo={movie.videoTrailer}
                                />
                                <button className="btn__book">BOOK TICKET</button>
                            </div>
                            <button className="btn__delete"><IconTrash width={20} height={20} fillColor={'#DBE2FB'} /></button>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}
