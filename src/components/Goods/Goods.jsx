import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Good from './Good/Good';
import './Goods.css';

const Goods = ({goodsFromServer, arr, dispatch, goodsInCart, notification}) => {
    let [cart, setCart] = useState(goodsFromServer);
    let sortPrice = ()=> {
      setCart(goodsFromServer.sort((a, b) => a.price - b.price));
    }

    let [star, setStar] = useState(arr)
    const handleStar = (event) => {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (i < event.target.className) {
          newArr.push('https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star-active.svg');
        } else {
          newArr.push('https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg')
        }
      }
      setStar(newArr);
    }
    
    return (
      <div className='goods'>
        <div className='goods__filter'>
          <button onClick={sortPrice}>Sort price</button>
        </div>

        <div className='goods__cards'>
          <div className='goods__content'>
            <div className='content__title'><h1>Goods</h1></div>

            <div className='card_main'>
              <NavLink to="/cart">
                <img src="https://cdn-icons-png.flaticon.com/512/126/126083.png" className='card__img' alt="card" />
                <div className={goodsInCart.length ? 'counter' : ''}>{ goodsInCart.length ? goodsInCart.length : '' }</div>
              </NavLink>
            </div>

            <div className="content__main">
              <div className='add-message'>{ notification }</div>
              {cart.map(item => <Good item={item} handleStar={handleStar} star={star} dispatch={dispatch} />)}
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Goods;
