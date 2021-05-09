import { COMBO_FOOD } from 'constants/food'
import React from 'react'
import FoodCard from '../FoodCard';
import './Food.scss';

export default function Food() {
    return (
        <div className="food">
            <div className="food__list grid grid-cols-2 gap-14 pr-14">
                {COMBO_FOOD.map((food, index) => (
                    <FoodCard food={food} key={index} />
                ))}
            </div>

        </div>
    )
}
