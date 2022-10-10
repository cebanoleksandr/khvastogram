const ADD_TEXT = 'ADD_TEXT';

let initialState = {
    messages: [],
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:  
            let newMessage = {id: new Date(), message: action.messageText};
            state.messages.push(newMessage);
            return state;

        default: 
            return state;
    }
}

//actionCreators
export const addMessageActionCreator = (text) => {
    return {
        type: ADD_TEXT,
        messageText: text,
    }
}

export default messageReducer;
