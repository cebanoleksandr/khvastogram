import React from "react";
import { NavLink } from "react-router-dom";
import { removeAllGoodsFromCart, removeGoodFromCart, increaseCountCreator, decreaseCountCreator } from '../../redux/goods_reducer';
import './Cart.css';

const Cart = ({goodsInCart, dispatch}) => {
    const deleteEverything = () => {
        dispatch(removeAllGoodsFromCart());
    }
    const removeGood = (id) => {
        dispatch(removeGoodFromCart(id));
    }

    let server = [...goodsInCart].sort((a, b) => a.id - b.id);

    let arr = [];

    for (let i = 0; i < server.length; i++) {
        let a = arr.filter(a => a.id === server[i].id);
        if (!a.length) {
            arr.push({...server[i]});
            arr[arr.length - 1].count = 1;
        } else {
            arr[arr.length - 1].count++;
            // arr[arr.length - 1].price = goodsInCart[i].price * arr[arr.length - 1].count;
        }
    }

    let onDecreaseCount = (goodId) => {
        dispatch(decreaseCountCreator(arr, goodId));
    }

    let onIncreaseCount = (goodId) => {
        dispatch(increaseCountCreator(arr, goodId));
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Cart</h1>
            {goodsInCart.length ? (
                <>
                    <div className="cart_qwt">
                        <div>
                            <p>There are {goodsInCart.length} goods in the cart</p>
                        </div>
                        <div>
                            <p className="delete_everything" onClick={deleteEverything}>Clear cart</p>
                        </div>
                    </div>

                    <table className='cart__table'>
                        <tr>
                            <th className="goods_title">Title</th>
                            <th className="goods_title">Count</th>
                            <th className="goods_title">Price</th>
                        </tr>
                        {arr.map(a => (
                            <tr key={a.id} className='good_tr'>
                                <td>{a.title}</td>
                                <td className="good_data">
                                    <div className="count_container">
                                        <div className="count_decrease" onClick={() => onDecreaseCount(a.id)}>-</div>
                                        <div className='count_main'>{a.count}</div>
                                        <div className="count_increase" onClick={() => onIncreaseCount(a.id)}>+</div>
                                    </div>
                                </td>
                                <td className="good_data">{a.count * a.price}$</td>
                                <td className="good_data">
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png" 
                                        className="remove_good" 
                                        alt="remove good" 
                                        onClick={() => removeGood(a.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <p>Total: {goodsInCart.map(a => a.price).reduce((a, b) => a + b, 0)}$</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <div className="design_order">
                        <NavLink to='/order' className="design_btn">Design an order</NavLink>
                    </div>
                </>
            ) : (
                <p>There is no goods in the cart. Please, add the goods to the cart</p>
            )}
        </div>
    )
}

export default Cart;
