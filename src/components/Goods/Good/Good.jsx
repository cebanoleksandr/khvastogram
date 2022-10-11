import React from "react";
import { NavLink } from "react-router-dom";
import { addNotificationCreator, addGoodInCartCreator } from '../../../redux/goods_reducer';
import './Good.css';

const Good = ({item, handleStar, star, dispatch}) => {
    const addToCard = () => {
        dispatch(addGoodInCartCreator(item));   
        dispatch(addNotificationCreator('The goods was added to cart'));
        setTimeout(() => {
          dispatch(addNotificationCreator(''));
        }, 3000);
    }
    
    return (
        <>
            <div className='good l' key={item.id}>
                <div className="good__wrapper">
                    <div className='good__image'>
                        <img src={item.image} className='good__img' alt="goods" />
                    </div>
                    <div className='good__title'>
                        <NavLink to={`/goods/${item.id}`} className='title_link'>
                            {item.title}
                        </NavLink>
                    </div>
                    <div className='good__code'>
                        The goods code: {item.code}
                    </div>
                    <div className='review'>
                        <div className='stars' onClick={handleStar}>
                            {star.map((a, i) => {
                                return (
                                    <span key={i} className='star'>
                                        <img src={a} className={i + 1} alt="star" />
                                    </span>
                                )
                            })}
                        </div>
                        <div>Review: {item.review}</div>
                    </div>
                    <div className='good__price'>
                        <div className='price'><p>Price:</p></div>
                        <div><p><b>{item.price}$</b></p></div>
                    </div>
                    <div className='good__add'>
                        <button type='button' className='button-add' onClick={addToCard}>Add to card</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Good;
