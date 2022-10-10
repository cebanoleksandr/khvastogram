import { combineReducers, createStore } from 'redux';
import messageReducer from './message_reducer';
import goodsReducer from './goods_reducer';
// import orderReduser from './order_reducer';

let reducers = combineReducers({
    messagesPage: messageReducer,
    goodsPage: goodsReducer,
    // orderPage: orderReduser,
})

let store = createStore(reducers);

export default store;
