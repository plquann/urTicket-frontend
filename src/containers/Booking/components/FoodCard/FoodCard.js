import React from 'react';
import { Minus, Plus } from 'components/Icons';
import './FoodCard.scss';
import { useDispatch } from 'react-redux';
import { decrementFoodOrder, incrementFoodOrder } from 'containers/Booking/slices/bookingSlice';

export default function FoodCard(props) {
    const { food } = props;
    const [quantity, setQuantity] = React.useState(0);
    const dispatch = useDispatch()

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        dispatch(incrementFoodOrder(food))
    }

    const handleDecrement = () => {
        setQuantity(quantity - 1);
        dispatch(decrementFoodOrder(food))
    }

    return (
        <div className="food__card ">
            <div className="food__card__img ">
                <img src={food?.image} alt="food combo" className="w-full h-full object-cover" />
                <div className="price">
                    ${food?.price}
                </div>
            </div>

            <div className="food__card__wrapper">
                <h5>{food?.name}</h5>
                {/* <p>{food.description}</p> */}
                <div className="order">
                    {quantity ?
                        <button className="rounded-l-md hover:bg-red-400 transition-all duration-300" onClick={handleDecrement}>
                            <Minus />
                        </button>
                        : <button className="rounded-l-md hover:bg-red-400 transition-all duration-300" disabled>
                            <Minus />
                        </button>
                    }
                    <span className="py-2 text-xl font-semibold border" style={{borderColor: '#11326f'}}>{quantity}</span>
                    <button className="rounded-r-md hover:bg-green-400 transition-all duration-300" onClick={handleIncrement}>
                        <Plus />
                    </button>
                </div>
            </div>

        </div>
    )
}
