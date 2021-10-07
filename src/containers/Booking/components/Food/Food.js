import React from 'react'
import { COMBO_FOOD } from 'constants/food'
import { axiosClient } from 'apis'
import Loading from 'components/Loading/Loading';
import FoodCard from '../FoodCard/FoodCard';
import './Food.scss';


export default function Food() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosClient.get('/products');
                setProducts(res);
            } catch (error) {
                console.log('🚀 ~ file: Food.js ~ line 16 ~ error', error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className="food h-full">
            <div className="food__list grid grid-cols-3 gap-14 pr-14 ">
                {products.length ? products.map((food, index) => (
                    <FoodCard food={food} key={index} />
                ))
                    : <Loading />}
            </div>

        </div>
    )
}
