import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Goods from './components/Goods/Goods';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Registration from './components/Registration/Registration';
import Order from './components/Order/Order';
import DescribeGood from './components/Goods/DescribeGood/DescribeGood';

const App = ({state, dispatch}) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header dispatch={dispatch} />
        <main className='main'>
          <Routes>
            <Route path='/goods' element={<Goods 
                goodsFromServer={state.goodsPage.goodsFromServer} 
                arr={state.goodsPage.arrStars}
                dispatch={dispatch}
                goodsInCart={state.goodsPage.goodsInCart}
                notification={state.goodsPage.addNotification} />} 
            />
            <Route path='/goods/:goodsId' element={<DescribeGood 
                goodsFromServer={state.goodsPage.goodsFromServer} 
                dispatch={dispatch}
                notification={state.goodsPage.addNotification} />} 
            />
            
            <Route path='/cart' element={<Cart 
                countGoods={state.goodsPage.countGoods} 
                goodsInCart={state.goodsPage.goodsInCart} 
                dispatch={dispatch} />} 
            />
            <Route path='/login' element={<Login />} />
            <Route path='/messages' element={<Messages messages={state.messagesPage.messages} dispatch={dispatch} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/order' element={<Order goodsInCart={state.goodsPage.goodsInCart} dispatch={dispatch} />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
