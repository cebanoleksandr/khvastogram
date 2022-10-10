import React from 'react';
import { addMessageActionCreator } from '../../redux/message_reducer';
import './Messages.css';

const Messages = ({messages, dispatch}) => {
    let click = (e) => {
        if (e.target.className === 'wrapper' 
          || e.target.className === 'dialogsField' 
          || e.target.className === 'dialog') {
            let window = document.querySelector('.window');
            window.classList.add('noVisible');
        }
    }

    let openWindow = () => {
        let window = document.querySelector('.window');
        window.classList.remove('noVisible');
    }

    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        let text = newMessageElement.current.value;
    
        dispatch(addMessageActionCreator(text));
        // newMessageElement.current.value = '';
        // let window = document.querySelector('.window');
        // window.classList.add('noVisible');
    }

    return (
        <div onClick={click} className='wrapper'>

            <div className='dialogsField'>
                {messages.map(a => {
                    return (
                        <div key={a.id} className='text'>{a.message}</div>
                    )
                })}
            </div>

            <div className='open_messanger'>
                <button onClick={openWindow}>Open messanger</button>
            </div>

            <div className="window noVisible">
                <textarea placeholder='Write your message' cols="60" ref={newMessageElement} rows="10"></textarea>
                <button className='bnt_send' onClick={addMessage}>Send a message</button>
            </div>
        </div>
    );
}

export default Messages;
