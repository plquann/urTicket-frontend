import React from 'react';
import Header from 'components/Header';
import MovieBackDrop from 'features/Movie/components/MovieBackDrop';

export default function MovieDetails() {
    return (
        <div className="w-full h-screen">
            <Header/>
            <MovieBackDrop/>
        </div>
    )
}
