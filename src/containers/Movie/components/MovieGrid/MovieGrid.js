import React from 'react'
import MovieCard from '../MovieCard/MovieCard';

export default function MovieGrid() {
    return (
        <div className="max-w-screen-lg mx-auto mb-7 grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item, index) => {
                return (
                    <MovieCard key={index} item={item} />
                )
            })}
        </div>
    )
}
