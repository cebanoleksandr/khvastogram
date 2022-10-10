const ADD_GOODS_COUNTER = 'ADD_GOODS_COUNTER';
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const ADD_GOOD_IN_CART = 'ADD_GOOD_IN_CART';
const REMOVE_ALL_GOODS_FROM_CART = 'REMOVE_ALL_GOODS_FROM_CART';
const REMOVE_GOOD_FROM_CART = 'REMOVE_GOOD_FROM_CART';
const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

let initialState = {
    goodsFromServer: [
        { id: 0, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'APPLE A1419 iMAC 27 RETINA 5K', description: 'Your photo. Your font. your widgets. your iPhone.iOS 16 lets you customize your lock screen in interesting ways. Write a photo on a layer so that it becomes noticeable. Track activity. View current updates for your favorite apps. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '195642', review: 5, price: 1999 },
        { id: 1, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'МАМИН ТЕЛЕФОН', description: 'Мамин телефон позволяет настраивать экран блокировки, изменив интересные способы. Написать фотографию на слой, чтобы она стала заметна. Отслеживайте активность. Просматривайте текущие обновления избранных приложений.', code: '195646', review: 4, price: 999 },
        { id: 2, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'SAMSUNG ANDROID 785K', description: 'Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '195947', review: 2, price: 1989 },
        { id: 3, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'NOKIA A5522', description: 'Hollywood-like home moviesCinematic mode automatically shifts focus to the most important object in the scene, just like directors do. Now you can record in 4K at 24 frames per second, the same frame rate you see in movies. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '192641', review: 4.5, price: 2899 },
        { id: 4, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'REDME ANDROID A5', description: 'Your photo. Your font. your widgets. your iPhone.iOS 16 lets you customize your lock screen in interesting ways. Write a photo on a layer so that it becomes noticeable. Track activity. View current updates for your favorite apps. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '1565646', review: 4.7, price: 859 },
        { id: 5, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'ДЕРЕВЯШКА ИЛИ КАЛЬКУЛЯТОР', description: 'Деревяшка или калькулятор - это хит этого сезона. Безусловно это лучший смартфон. Обладатели этого телефона смогут достичь успеха в любых начинаниях. заказывайте Деревяшку или калькулятор по уникальной цене', code: '105642', review: 5, price: 1999 },
        { id: 6, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'УГЛОВОЙ ДИВАН', description: 'Модульность данной модели позволит вам подобрать максимально подходящую конфигурацию дивана, а комплектация отдельных сегментов механизмами трансформации позволит использовать этот диван в качестве ежедневного спального места. Модульная система РАФТ однозначно станет центром отдыха в вашем доме. Используемый механизм трансформации - пантограф.', code: '196646', review: 4, price: 999 },
        { id: 7, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'SAMSUNG ANDROID 785K', description: 'Your photo. Your font. your widgets. your iPhone.iOS 16 lets you customize your lock screen in interesting ways. Write a photo on a layer so that it becomes noticeable. Track activity. View current updates for your favorite apps. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '195147', review: 2, price: 1989 },
        { id: 8, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'ВАРЕНЫЧКА ПОЛЫВАЕ ОГОРОД', description: 'Варенычка опять лындае и полывае огород, бо скоро мае прыихаты Варенык на пару дней и оставыты машину на улице. Потом Варенычка после полития огорода, снова полфвае огород. Так сказать поливщик от бога', code: '199641', review: 4.5, price: 2899 },
        { id: 9, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'REDME ANDROID A5', description: 'Your photo. Your font. your widgets. your iPhone.iOS 16 lets you customize your lock screen in interesting ways. Write a photo on a layer so that it becomes noticeable. Track activity. View current updates for your favorite apps. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '1565146', review: 4.7, price: 859 },
        { id: 10, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'APPLE A1419 iMAC 27 RETINA 5K', description: 'Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '100642', review: 5, price: 1999 },
        { id: 11, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'iPHONE S5 RETINA 5K', description: 'Hollywood-like home moviesCinematic mode automatically shifts focus to the most important object in the scene, just like directors do. Now you can record in 4K at 24 frames per second, the same frame rate you see in movies. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '148646', review: 4, price: 999 },
        { id: 12, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'SAMSUNG ANDROID 785K', description: 'Your photo. Your font. your widgets. your iPhone.iOS 16 lets you customize your lock screen in interesting ways. Write a photo on a layer so that it becomes noticeable. Track activity. View current updates for your favorite apps. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '199047', review: 2, price: 1989 },
        { id: 13, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'NOKIA A5522', description: 'Your photo. Your font. your widgets. your iPhone.iOS 16 lets you customize your lock screen in interesting ways. Write a photo on a layer so that it becomes noticeable. Track activity. View current updates for your favorite apps. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '192011', review: 4.5, price: 2899 },
        { id: 14, image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg', title: 'REDME ANDROID A5', description: 'Your photo. Your font. your widgets. your iPhone.iOS 16 lets you customize your lock screen in interesting ways. Write a photo on a layer so that it becomes noticeable. Track activity. View current updates for your favorite apps. Fault detection calls for help when you cant.The iPhone 14 may be characterized by a serious car accident and then call 911 and report your emergency contact.', code: '156046', review: 4.7, price: 859 },
    ],
    arrStars: [
        'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
        'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
        'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
        'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
        'https://raw.githubusercontent.com/mate-academy/layout_stars/95ab9b97220343f7c24c7e28ceafe618f8ba050e/src/images/star.svg',
    ],
    countGoods: '',
    addNotification: '',
    goodsInCart: [],
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOODS_COUNTER:
            if (state.countGoods === '') {
                state.countGoods = 0;
            }
            state.countGoods++;
            return state;

        case ADD_NOTIFICATION:
            state.addNotification = action.notification;
            return state;

        case ADD_GOOD_IN_CART:
            state.goodsInCart.push(action.newGood);
            return state;

        case REMOVE_ALL_GOODS_FROM_CART:
            state.goodsInCart = [];
            state.countGoods = '';
            return state;

        case REMOVE_GOOD_FROM_CART:
            state.goodsInCart = state.goodsInCart.filter(a => a.id !== action.goodId);
            state.countGoods = state.goodsInCart.length;
            if (state.countGoods === 0) {
                state.countGoods = '';
            }
            return state;

        case INCREASE_COUNT:
            state.countGoods++;
            state.goodsInCart = [];
            for (let i = 0; i < action.arr.length; i++) {
                if (action.arr[i].id === action.id) {
                    action.arr[i].count++;
                    if (action.arr[i].count === 0) {
                        continue;
                    }
                }
                let count = action.arr[i].count;
                for (let j = 0; j < count; j++) {
                    action.arr[i].count = 1;
                    state.goodsInCart.push(action.arr[i]);
                }
            }
            
            return state;

        case DECREASE_COUNT:
            state.countGoods--;
            if (state.countGoods === 0) {
                state.countGoods = '';
            }
            state.goodsInCart = [];
            for (let i = 0; i < action.arr.length; i++) {
                if (action.arr[i].id === action.id) {
                    action.arr[i].count--;
                    if (action.arr[i].count === 0) {
                        continue;
                    }
                }
                let count = action.arr[i].count;
                for (let j = 0; j < count; j++) {
                    action.arr[i].count = 1;
                    state.goodsInCart.push(action.arr[i]);
                }
            }
            
            return state;

        default:
            return state;
    }
}

//actionCreators
export const addGoodsCounterCreator = () => {
    return {
        type: ADD_GOODS_COUNTER,
    }
}

export const addNotificationCreator = (notification) => {
    return {
        type: ADD_NOTIFICATION,
        notification: notification,
    }
}

export const addGoodInCartCreator = (newGood) => {
    return {
        type: ADD_GOOD_IN_CART,
        newGood: newGood,
    }
}

export const removeAllGoodsFromCart = () => {
    return {
        type: REMOVE_ALL_GOODS_FROM_CART,
    }
}

export const removeGoodFromCart = (goodId) => {
    return {
        type: REMOVE_GOOD_FROM_CART,
        goodId: goodId,
    }
}

export const increaseCountCreator = (arr, goodID) => {
    return {
        type: INCREASE_COUNT,
        arr: arr, 
        id: goodID,
    }
}

export const decreaseCountCreator = (arr, goodID) => {
    return {
        type: DECREASE_COUNT,
        arr: arr, 
        id: goodID,
    }
}

export default goodsReducer;
