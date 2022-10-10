import messageReducer from "./message_reducer";
import goodsReducer from "./goods_reducer";

let store = {
    _state: {
        goodsPage: {
            goodsFromServer: [
                { id: 0, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'APPLE A1419 iMAC 27 RETINA 5K', code: '195642', review: 5, price: 1999 },
                { id: 1, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'МАМИН ТЕЛЕФОН', code: '195646', review: 4, price: 999 },
                { id: 2, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'SAMSUNG ANDROID 785K', code: '195947', review: 2, price: 1989 },
                { id: 3, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'NOKIA A5522', code: '192641', review: 4.5, price: 2899 },
                { id: 4, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'REDME ANDROID A5', code: '1565646', review: 4.7, price: 859 },
                { id: 5, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'ДЕРЕВЯШКА ИЛИ КАЛЬКУЛЯТОР', code: '105642', review: 5, price: 1999 },
                { id: 6, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'УГЛОВОЙ ДИВАН', code: '196646', review: 4, price: 999 },
                { id: 7, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'SAMSUNG ANDROID 785K', code: '195147', review: 2, price: 1989 },
                { id: 8, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'ВАРЕНЫЧКА ПОЛЫВАЕ ОГОРОД', code: '199641', review: 4.5, price: 2899 },
                { id: 9, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'REDME ANDROID A5', code: '1565146', review: 4.7, price: 859 },
                { id: 10, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'APPLE A1419 iMAC 27 RETINA 5K', code: '100642', review: 5, price: 1999 },
                { id: 11, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'iPHONE S5 RETINA 5K', code: '148646', review: 4, price: 999 },
                { id: 12, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'SAMSUNG ANDROID 785K', code: '199047', review: 2, price: 1989 },
                { id: 13, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'NOKIA A5522', code: '192011', review: 4.5, price: 2899 },
                { id: 14, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'REDME ANDROID A5', code: '156046', review: 4.7, price: 859 },
            ],
            arrStars: [
                'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
                'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
                'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
                'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
                'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
            ],
        },
        messagesPage: {
            messages: [],
        },
    },

    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.goodsPage = goodsReducer(this._state.goodsPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;
