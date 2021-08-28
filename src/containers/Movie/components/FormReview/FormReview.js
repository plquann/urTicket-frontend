import React, { useEffect } from 'react';
import './FormReview.scss'
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Rating } from '@material-ui/core';
import { createReviewMovie } from 'containers/Movie/slices/movieSlide';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required !!!')
        .min(10, 'Title must be at least 10 characters !!!')
        .max(50, 'Title must be at most 50 characters !!!'),
    content: yup.string()
        .max(200, 'Review must be at most 200 characters !!!'),
});

const FormReview = (props) => {
    const dispatch = useDispatch();

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        const review = { ...data, rating: data.rating * 2, title: data.title.trim(), content: data.content.trim() };
        reset({ title: '', content: '', rating: 0 });

        dispatch(createReviewMovie(review));
    }

    return (
        <div className="your__movie__review">
            <h4>Leave your review</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="rating"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={0}
                    render={({ field }) =>
                        <Rating
                            precision={0.5}
                            size="large"
                            {...field}
                            value={Number(field.value)}
                        />
                    }
                />
                <input type="text" name="movie"  {...register("movieId", {})} value={props.movieId} hidden />
                <p className="text-red-500 mb-2">{errors.rating?.message}</p>

                <input type="text" name="title" placeholder="Title" {...register("title", {})} />
                <p className="text-red-500 mb-2">{errors.title?.message}</p>

                <textarea {...register("content", {})} rows="2" placeholder="Enter your reviews..." />
                <p className="text-red-500 my-2">{errors.content?.message}</p>

                <div className="flex justify-end">
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormReview
