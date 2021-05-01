import Minus from 'components/Icons/Minus';
import Plus from 'components/Icons/Plus';
import React from 'react';
import './FoodCard.scss';

export default function FoodCard(props) {
    const { food, key } = props;
    return (
        <div key={key} className="food__card">
            <div className="food__card__img ">
                <img src={food.img} alt="food combo" className="w-full h-full" />
                <div className="price">
                    {food.price}
                </div>
                <div className="sale">
                    {`${food.sale}% OFF`}
                </div>
            </div>

            <div className="food__card__wrapper">
                <h5>{food.label}</h5>
                <p>{food.description}</p>
                <div className="order">
                    <button className="rounded-l-full ">
                        <Minus />
                    </button>
                    <span className="col-span-2 border py-2 " style={{ borderColor: '#11326f' }}>0</span>
                    <button className="rounded-r-full ">
                        <Plus />
                    </button>
                </div>
            </div>

        </div>
    )
}
