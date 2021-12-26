import React from 'react';
import ReactDOM from 'react-dom';

export const ChatApp = () => {
    return (
        <>
            <h1>Chat App</h1>
        </>
    )
}

if (document.getElementById('chatApp')) {
    ReactDOM.render(<ChatApp />, document.getElementById('chatApp'));
}