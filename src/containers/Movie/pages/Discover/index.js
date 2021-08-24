import React from 'react'

import Pagination from 'components/Pagination/Pagination'
import MovieItem from 'containers/Movie/components/MovieItem/MovieItem'
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch'
import FilterSort from 'containers/Movie/components/FilterStatus/FilterStatus';
import FilterCinema from 'containers/Movie/components/FilterCinema/FilterCinema'
import FilterDate from 'containers/Movie/components/FilterDate/FilterDay'
import Page from 'components/Page/Page'
import { Filter } from 'components/Icons'
import { useSelector } from 'react-redux';

export default function Discover() {
    const {movieNowPlaying} = useSelector(state => state.home)
    return (
        <Page title="Discover | UR-TICKET">
            <div className="w-full h-full" >
                <MovieSearch />
                <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto">
                    <div className="col-span-1">
                        <div className="mb-8 inline-flex space-x-4 items-center">
                            <Filter name="Filter" />
                            <p className="text-2xl font-medium ">SEARCH FITTER</p>
                        </div>

                        <FilterCinema />
                        <FilterDate />
                    </div>
                    <div className="col-span-3">
                        <FilterSort />
                        {movieNowPlaying.length && movieNowPlaying?.slice(0,10).map((movie, index) => (
                            <MovieItem key={movie?.id} movie={movie} />
                        ))}
                        <Pagination />
                    </div>
                </div>
            </div>
        </Page>
    )
}
