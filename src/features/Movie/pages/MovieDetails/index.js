import React from 'react';
import Header from 'components/Header';
import MovieBackDrop from 'features/Movie/components/MovieBackDrop';
import WrapperInfo from 'features/Movie/components/WrapperInfo';
import Footer from 'components/Footer';

export default function MovieDetails() {
    return (
        <div className="w-full">
            <Header />
            <MovieBackDrop />
            <WrapperInfo />
            <Footer />
        </div>
    )
}
