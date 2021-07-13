import React from 'react';
import PopupTrailer from 'containers/Movie/components/PopupTrailer/PopupTrailer'
import './NewTrailer.scss'
import { newsTrailer } from 'containers/News/_mocks_/newsData';

export default function NewTrailer() {
    return (
        <div className="new-trailer">
            <h1 className="new-trailer__title">New Official Trailers</h1>
            <div className="grid grid-cols-2 gap-2">
                {newsTrailer.map((item, index) => (
                    <div key={item.videoId} className="new-trailer__item">
                        <div className="new-trailer__item__video">
                            <a href="/details" className="block">
                                <img className="w-full" src={`https://i3.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`} alt="movie" />
                            </a>
                            <PopupTrailer
                                open={<button className="button new-trailer__item__video__playTrailer">
                                    <i className="fa fa-play" id="viewTrailer" />
                                </button>}
                                idVideo={item.videoId}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
