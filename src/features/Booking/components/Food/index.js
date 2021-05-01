import { COMBO_FOOD } from 'constants/food'
import React from 'react'
import FoodCard from '../FoodCard';
import './Food.scss';

export default function Food() {
    return (
        <div className="food">
            <div className="food__title">
                <h2>we have food</h2>
                <p className="text-lg">Pre-order Your Meal and Save More!</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {COMBO_FOOD.map((food, index) => (
                    <FoodCard food={food} key={index} />
                ))}

            </div>

        </div>
    )
}
