import React from 'react';
import './FilterCinema.scss';
import { useForm } from 'react-hook-form';


const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'];


export default function FilterCinema(props) {
    const { onSubmit } = props;
    const { register, handleSubmit, watch } = useForm();


    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            const filterGenre = genres.filter(genre => value[genre] === true);
            // console.log('🚀 ~ file: FilterCinema.js ~ line 17 ~ filterGenre', filterGenre);
            onSubmit({ genre: filterGenre[0] });
        });

        return () => subscription.unsubscribe();
    }, [watch, onSubmit]);

    return (
        <div className="filter__cinema " >
            <p className="filter__cinema__title">Genres</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="filter__cinema__wrapper">
                    {genres.map((genre, index) => (
                        <div className="filter__cinema__wrapper__item" key={index}>
                            <input type="checkbox" name={genre} id={genre} {...register(`${genre}`, {})} />
                            <label htmlFor={genre}>{genre}</label>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}
