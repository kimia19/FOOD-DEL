import React, { useState } from 'react'
import { useContext } from 'react';
import { food_list } from '../../assets/assets';
import './SearchItems.css'
import { StoreContext } from '../../context/StoreContext';
import add from '../../assets/add_icon_white.png'
import remove_red from '../../assets/remove_icon_red.png'
import add_green from '../../assets/add_icon_green.png'

const SearchItems = () => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const [searchItem, setSearchItem] = useState('');
    const [filteredItem, setFilteredItem] = useState(food_list);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredFood = food_list.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setFilteredItem(filteredFood);
    }

    return (
        <div>
            <input
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder='Type to search'
            />
            <div className='search'>
                {filteredItem.map((item) => {
                    return (
                        <div className='content'>
                            <div>
                                <div className="container">
                                    <img src={item.image} className="item-img" alt="" />
                                    {!cartItems[item._id]
                                        ? <img className='pluse' onClick={() => addToCart(item._id)} src={add} alt='' />
                                        : <div className='counter'>
                                            <img src={remove_red} onClick={() => removeFromCart(item._id)} alt='' />
                                            <p>{cartItems[item._id]}</p>
                                            <img src={add_green} onClick={() => addToCart(item._id)} alt='' />
                                        </div>
                                    }
                                </div>
                                <div className='elements'>
                                    <p key={item._id}>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div>
    )
}

export default SearchItems