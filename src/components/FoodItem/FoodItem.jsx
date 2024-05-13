//get food_list attribute with its value as props 
//we have 2 case.if itemCount is zero we provide one add button otherwise one counter
import React, { useContext } from 'react'
import './FoodItem.css'
import rating_stars from '../../assets/rating_starts.png'
import add from '../../assets/add_icon_white.png'
import remove_red from '../../assets/remove_icon_red.png'
import add_green from '../../assets/add_icon_green.png'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} className="food-item-img" alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={add} alt='' />
                    : <div className='food-item-counter'>
                        <img src={remove_red} onClick={() => removeFromCart(id)} alt='' />
                        <p>{cartItems[id]}</p>
                        <img src={add_green} onClick={() => addToCart(id)} alt='' />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={rating_stars} />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem