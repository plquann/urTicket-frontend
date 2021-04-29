import React from 'react';
import Header from 'components/Header';
import MovieBackDrop from 'features/Movie/components/MovieBackDrop';
import WrapperInfo from 'features/Movie/components/WrapperInfo';
import Footer from 'components/Footer';
import Schedule from 'features/Movie/components/Schedule';

export default function MovieDetails() {
    return (
        <div className="w-full ">
            <Header />
            <MovieBackDrop />
            <WrapperInfo />
            <Schedule />
            <Footer />
        </div>
    )
}
