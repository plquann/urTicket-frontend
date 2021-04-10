import Footer from 'components/Footer'
import Header from 'components/Header'
import Pagination from 'components/Pagination'
import MovieCarousel from 'features/Movie/components/MovieBannerCarousel'
import MovieSearch from 'features/Movie/components/MovieSearch'
import Tabs from 'features/Movie/components/Tabs'
import React from 'react'

export default function MovieHome() {
    return (
        <div className="w-full h-full">
            <Header />
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <Pagination/>
            <Footer />
        </div>
    )
}
