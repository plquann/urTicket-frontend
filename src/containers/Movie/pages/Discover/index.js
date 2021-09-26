import React, { useEffect, useState } from 'react'
import { movieAPI } from 'apis';

import Pagination from 'components/Pagination/Pagination'
import MovieItem from 'containers/Movie/components/MovieItem/MovieItem'
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch'
import FilterCinema from 'containers/Movie/components/FilterCinema/FilterCinema'
import FilterDate from 'containers/Movie/components/FilterDate/FilterDay'
import Page from 'components/Page/Page'
import { Filter } from 'components/Icons'

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

    // const handleFiltersChange = (newFilter) => {
    //     setFilters({
    //         ...filters,
    //         _page: 1, 
    //         title_like: newFilter.searchTerm,
    //     });
    // };

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
                        {movies.length && movies?.map((movie, index) => (
                            <MovieItem key={movie?.id} movie={movie} />
                        ))}
                        <Pagination pagination={pagination} onPageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </Page>
    )
}
