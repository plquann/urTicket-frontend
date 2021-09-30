import React, { useEffect, useLayoutEffect, useState } from 'react'
import { movieAPI } from 'apis';

import Pagination from 'components/Pagination/Pagination'
import MovieItem from 'containers/Movie/components/MovieItem/MovieItem'
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch'
import FilterCinema from 'containers/Movie/components/FilterCinema/FilterCinema'
import FilterDate from 'containers/Movie/components/FilterDate/FilterDay'
import Page from 'components/Page/Page'
import { Filter } from 'components/Icons'
import Loading from 'components/Loading/Loading';
import SearchDiscover from 'containers/Movie/components/SearchDiscover/SearchDiscover';

export default function Discover() {
    // const { movieNowPlaying } = useSelector(state => state.home);
    // const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalRows: 1
    });

    const [filters, setFilters] = useState({
        page: 1,
        limit: 10,
        genre: '',
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await movieAPI.getMovies(filters);
                setMovies(res.movies);
                setPagination({
                    page: filters.page,
                    limit: filters.limit,
                    totalRows: res.totalRow
                })

            } catch (err) {
                console.log('🚀 ~ file: Discover ~ line 34 ~ err', err);
            }
        }

        fetchMovies();
    }, [filters]);

    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,
            page: newPage,
        });
    };

    const handleFiltersChange = (newFilter) => {
        console.log('🚀 ~ file: index.js ~ line 60 ~ newFilter', newFilter);
        setFilters({
            ...filters,
            page: 1, 
            genre: newFilter.genre,
        });
    };

    return (
        <Page title="Discover | UR-TICKET">
            <div className="w-full h-full" >
                <SearchDiscover />
                <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto">
                    <div className="col-span-1">
                        <div className="mb-8 inline-flex space-x-4 items-center">
                            <Filter name="Filter" />
                            <p className="text-2xl font-medium ">SEARCH FITTER</p>
                        </div>

                        <FilterCinema onSubmit={handleFiltersChange} />
                        <FilterDate />
                    </div>
                    <div className="col-span-3">
                        {movies.length ?
                            movies?.map((movie, index) => (
                                <MovieItem key={movie?.id} movie={movie} />
                            ))
                            :
                            <Loading />
                        }
                        <Pagination pagination={pagination} onPageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </Page>
    )
}
