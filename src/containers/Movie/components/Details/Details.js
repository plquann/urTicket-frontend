import React, { useState } from 'react';
import './Details.scss';
import ReviewDetails from '../ReviewDetails/ReviewDetails'
import CustomCarousel from 'components/CustomCarousel/CustomCarousel'
import { useSelector } from 'react-redux'
import MovieReviews from '../MovieReviews/MovieReviews';

export default function Details(props) {
    const [activeTab, setActiveTab] = useState('summary');

    const  movieDetails  = useSelector(state => state.movie.movieDetails);

    const handleChangeTabs = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className="details__tab w-full">
            <div className="details__tab__header ">
                <button
                    className={activeTab === 'summary' ? "details__tab__header__btn active" : "details__tab__header__btn"}
                    style={{}}
                    onClick={() => handleChangeTabs('summary')}
                >
                    SUMMARY
                </button>

                <button
                    className={activeTab === 'reviews' ? "details__tab__header__btn active" : "details__tab__header__btn"}
                    style={{}}
                    onClick={() => handleChangeTabs('reviews')}
                >
                    USER REVIEWS
                </button>
            </div>
            <div className="details__tab__body">
                {activeTab === 'summary'
                    ? <div className="details__tab__body__summary">
                        <div className="content">
                            <div className="scenarios mb-12">
                                <h3 className="text-xl mb-4 font-semibold">SCENARIOS</h3>
                                <p className="" style={{ color: '#dbe2fb', fontSize: '16px' }}>{movieDetails.data.description}</p>
                            </div>
                            <div className="cast mb-4 w-full h-auto">
                                <div className="title pb-3 mb-10" style={{ borderBottom: '1px dashed ' }}>
                                    <h3 className="text-xl font-semibold">CASTS</h3>
                                </div>
                                <CustomCarousel data={movieDetails.data.casts} />
                            </div>
                            <div className="crew mb-4 w-full">
                                <div className="title pb-3 mb-10" style={{ borderBottom: '1px dashed ' }}>
                                    <h3 className="text-xl font-semibold">CREWS</h3>
                                </div>
                                <CustomCarousel data={movieDetails.data.crews} />
                            </div>
                        </div>
                    </div>
                    : <div className="details__tab__body__review">
                        <MovieReviews />
                    </div>
                }
            </div>
        </div>
    )
}