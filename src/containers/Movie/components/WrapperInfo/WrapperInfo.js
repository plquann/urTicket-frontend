import React from 'react';
import { MOVIE_IMG, LOGO_PARTNER } from 'constants/image';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieScore from '../MovieScore/MovieScore';
import PhotosPreview from '../PhotosPreview/PhotoPreview';
import Details from '../Details/Details';
import Offer from '../Offer/Offer';
import Schedule from '../MovieSchedule/MovieSchedule';

export default function WrapperInfo(props) {
    return (
        <div className="wrapper__info max-w-screen-xl mx-auto mb-10 h-auto" style={{ marginTop: '-200px', zIndex: '100' }}>
            <div className="grid grid-cols-4 gap-10">
                <div className="details-banner-thumb">
                    <div className="movie__poster mb-5 rounded-md overflow-hidden" style={{ border: '1px solid #17305f' }}>
                        <img className="w-full h-auto" src={MOVIE_IMG[2]} alt="movie" />
                    </div>
                </div>
                <div className="col-span-3">
                    <MovieInfo />
                    <MovieScore handleScroll={props.handleScroll} />
                </div>
                <div className="movie__offer ">
                        <h3 className="text-2xl font-semibold mb-10 text-center">Applicable Offer</h3>
                        <Offer photo={LOGO_PARTNER[11].img} title={LOGO_PARTNER[11].name} description={LOGO_PARTNER[11].description} />
                        <Offer photo={LOGO_PARTNER[12].img} title={LOGO_PARTNER[12].name} description={LOGO_PARTNER[11].description} />
                        <Offer photo={LOGO_PARTNER[13].img} title={LOGO_PARTNER[13].name} description={LOGO_PARTNER[11].description} />
                    </div>
                <div className="details-banner-content col-span-3 -mt-16">
                    <PhotosPreview />
                    <Details />
                    <Schedule refProp={props.refProp} />
                </div>
            </div>
        </div>
    )
}
