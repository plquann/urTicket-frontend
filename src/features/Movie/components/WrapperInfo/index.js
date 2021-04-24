import React from 'react';
import { MOVIE_IMG } from 'constants/Image';
import MovieInfo from '../MovieInfo';
import MovieScore from '../MovieScore';
import PhotosPreview from '../PhotosPreview';
import Details from '../Details';

export default function WrapperInfo(props) {
    return (
        <div className="wrapper__info max-w-screen-xl mx-auto mb-10" style={{ marginTop: '-180px', zIndex: '100' }}>
            <div className="grid grid-cols-4 gap-10  grid-flow-row auto-rows-max">
                <div className="details-banner-thumb ">
                    <img className="w-full h-auto" src={MOVIE_IMG[2]} alt="movie" />
                </div>
                <div className="details-banner-content col-span-3">
                    <MovieInfo />
                    <MovieScore />
                    <PhotosPreview />
                    <Details />
                </div>
            </div>
        </div>
    )
}
