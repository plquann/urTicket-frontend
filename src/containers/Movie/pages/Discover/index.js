import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Pagination from 'components/Pagination/Pagination'
import MovieExplore from 'containers/Movie/components/MovieExplore/MovieExplore'
import MovieItem from 'containers/Movie/components/MovieItem/MovieItem'
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch'
import FilterSort from 'containers/Movie/components/FilterStatus/FilterStatus';
import React from 'react'
import FilterCinema from 'containers/Movie/components/FilterCinema/FilterCinema'
import FilterDate from 'containers/Movie/components/FilterDate/FilterDay'
import Icons from 'components/Icons'

export default function Discover() {
    return (
        <div className="w-full h-full" >
            <MovieExplore />
            <MovieSearch />
            <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto">
                <div className="col-span-1">
                    <div className="mb-8 inline-flex space-x-4 items-center">
                        <Icons name="Filter" />
                        <p className="text-2xl font-medium ">SEARCH FITTER</p>
                    </div>

                    <FilterCinema />
                    <FilterDate />
                </div>
                <div className="col-span-3">
                    <FilterSort />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
