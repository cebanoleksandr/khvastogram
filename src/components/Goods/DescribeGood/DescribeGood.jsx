import React from "react";
import { useParams } from 'react-router-dom';
import { addGoodsCounterCreator, addNotificationCreator, addGoodInCartCreator } from '../../../redux/goods_reducer';
import './DescribeGood.css';

const DescribeGood = ({goodsFromServer, dispatch, notification}) => {
    const {goodsId} = useParams();
    const item = goodsFromServer[goodsId];
    const addToCart = () => {
        dispatch(addGoodInCartCreator(item));   
        
        dispatch(addGoodsCounterCreator());
        dispatch(addNotificationCreator('The goods was added to cart'));
        setTimeout(() => {
          dispatch(addNotificationCreator(''));
        }, 3000);
    }
    return (
        <div className="product">
            <div className="product__title">
                <h1>{item.title}</h1>
                <div className='add-message'>{ notification }</div>
            </div>

            <div className="product__content">
                <div className="product__photo">
                    <img src={item.image} className='product_img' alt="product" />
                </div>
                <div className="description_container">
                    <div className="product__description">
                        <h2>Description:</h2>
                        <p className="text_describtion">
                            {item.description ? item.description : 'This product does not have any description.'}
                        </p>
                    </div>
                    <div className="price_container">
                        <div className="product__price">
                            <b>Price: {item.price}$</b>
                        </div>
                        <div className="product__btn">
                            <button className="addBtn" onClick={addToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescribeGood;
