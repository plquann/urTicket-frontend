import React from 'react';
import PopupTrailer from 'containers/Movie/components/PopupTrailer/PopupTrailer'
import './NewTrailer.scss'

const videoInfo = {
    title: 'Black Marvel Studios’ Black Widow | New Trailer',
    idVideo: 'Fp9pNPdNwjI',
}

export default function NewTrailer() {
    return (
        <div className="new-trailer">
            <h1 className="new-trailer__title">Official Trailers</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="new-trailer__item">
                    <div className="new-trailer__item__video">
                        <a href="/details" className="block">
                            <img className="w-full" src={`https://img.youtube.com/vi/${videoInfo.idVideo}/0.jpg`} alt="movie" />
                        </a>
                        <PopupTrailer
                            open={<button className="button new-trailer__item__video__playTrailer">
                                <i className="fa fa-play" id="viewTrailer" />
                            </button>}
                            idVideo={videoInfo.idVideo}
                        />
                    </div>
                </div>

                <div className="new-trailer__item">
                    <div className="new-trailer__item__video">
                        <a href="/details" className="block">
                            <img className="w-full" src={`https://img.youtube.com/vi/${videoInfo.idVideo}/0.jpg`} alt="movie" />
                        </a>
                        <PopupTrailer
                            open={<button className="button new-trailer__item__video__playTrailer">
                                <i className="fa fa-play" id="viewTrailer" />
                            </button>}
                            idVideo={videoInfo.idVideo}
                        />
                    </div>
                </div>

                <div className="new-trailer__item">
                    <div className="new-trailer__item__video">
                        <a href="/details" className="block">
                            <img className="w-full" src={`https://img.youtube.com/vi/${videoInfo.idVideo}/0.jpg`} alt="movie" />
                        </a>
                        <PopupTrailer
                            open={<button className="button new-trailer__item__video__playTrailer">
                                <i className="fa fa-play" id="viewTrailer" />
                            </button>}
                            idVideo={videoInfo.idVideo}
                        />
                    </div>
                </div>

                <div className="new-trailer__item">
                    <div className="new-trailer__item__video">
                        <a href="/details" className="block">
                            <img className="w-full" src={`https://img.youtube.com/vi/${videoInfo.idVideo}/0.jpg`} alt="movie" />
                        </a>
                        <PopupTrailer
                            open={<button className="button new-trailer__item__video__playTrailer">
                                <i className="fa fa-play" id="viewTrailer" />
                            </button>}
                            idVideo={videoInfo.idVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
