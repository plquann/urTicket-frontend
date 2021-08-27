import React from 'react';
import './WrapperInfo.scss';
import { LOGO_PARTNER } from 'constants/image';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieScore from '../MovieScore/MovieScore';
import Details from '../Details/Details';
import Offer from '../Offer/Offer';
import Schedule from '../MovieSchedule/MovieSchedule';
import { useSelector } from 'react-redux';
import PopupTrailer from '../PopupTrailer/PopupTrailer';

export default function WrapperInfo(props) {
    const { data } = useSelector(state => state.movie.movieDetails);
    // console.log('🚀 ~ file: WrapperInfo.js ~ line 42 ~ data', data);
    const { handleScroll, refProp } = props;
    const { casts, crews, voteAverage, posterUrl, backdropUrl, trailerVideoUrl, ...movieInfo } = data;

    return (
        <div className="wrapper__info max-w-screen-xl mx-auto h-auto mb-10">
            <div className="grid grid-cols-4 gap-10 -mt-56">
                <div className="details-banner-thumb">
                    <div className="movie__poster mb-5 rounded-md overflow-hidden" style={{ border: '1px solid #17305f' }}>
                        <img className="w-full h-auto" src={`${posterUrl}`} alt="movie" />
                    </div>
                </div>
                <div className="col-span-3">
                    <MovieInfo movie={movieInfo} />
                    <MovieScore handleScroll={handleScroll} voteAverage={voteAverage} />
                </div>
                <div className="movie__offer ">
                    <h3 className="text-2xl font-semibold mb-10 text-center">Applicable Offer</h3>
                    <Offer photo={LOGO_PARTNER[11].img} title={LOGO_PARTNER[11].name} description={LOGO_PARTNER[11].description} />
                    <Offer photo={LOGO_PARTNER[12].img} title={LOGO_PARTNER[12].name} description={LOGO_PARTNER[11].description} />
                    <Offer photo={LOGO_PARTNER[13].img} title={LOGO_PARTNER[13].name} description={LOGO_PARTNER[11].description} />
                </div>
                <div className="details-banner-content col-span-3 -mt-20 ">
                    <h3 className="text-2xl font-bold mb-4">TRAILER & PHOTOS </h3>
                    <div className="media h-44 grid grid-cols-3 gap-4 mb-10">
                        <div className="media-youtube rounded-md overflow-hidden">
                            <img className="h-full" src={`https://i3.ytimg.com/vi/${trailerVideoUrl}/maxresdefault.jpg`} alt="movieTrailer" />
                            <PopupTrailer
                                open={<button className="button-playTrailer">
                                    <i className="fa fa-play" id="viewTrailer" />
                                </button>}
                                idVideo={trailerVideoUrl}
                            />
                        </div>
                        <div className="media-poster h-full rounded-md overflow-hidden">
                            <img className="w-full object-cover" src={posterUrl} alt="movie poster" />
                        </div>
                        <div className="media-backdrop rounded-md overflow-hidden">
                            <img className="h-full" src={backdropUrl} alt="movie poster" />
                        </div>
                    </div>
                    <Details />
                    <Schedule refProp={refProp} />
                </div>
            </div>
        </div>
    )
}
