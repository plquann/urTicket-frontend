import Footer from 'components/Footer'
import Header from 'components/Header'
import Pagination from 'components/Pagination'
import MovieExplore from 'containers/Movie/components/MovieExplore'
import MovieItem from 'containers/Movie/components/MovieItem'
import MovieSearch from 'containers/Movie/components/MovieSearch'
import FilterSort from 'containers/Movie/components/FilterSort';
import React from 'react'
import FilterCinema from 'containers/Movie/components/FilterCinema'
import FilterDate from 'containers/Movie/components/FilterDate'
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
