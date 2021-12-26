import axios from 'axios';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import {Connection} from "./hooks/Connection";
// import {ChatRoomItem} from "./Components/ChatRoomItem";
// import {ChatItem} from "./Components/ChatItem";

export const ChatApp = () => {

    const conn = Connection();
    const [chatRooms, setChatRooms] = useState([]);
    const [showChats, setShowChats] = useState(false);
    const [chats, setChats] = useState([]);

    const handleBackButton = () => {
        getRooms();
    }

    const handleRoomChats = async (room) => {
        await axios.get(`http://abcmio-old.lndo.site/es/my/chats/${room.id}`)
            .then( resp => {
                setChats(resp.data.chats);
            });
        setShowChats(true);
    }

    const getRooms = async() => {
        setShowChats(false);
        await axios.get('http://abcmio-old.lndo.site/es/my/chats')
            .then(resp => {
                const data = resp.data;
                setChatRooms(data.data);
            });
    }

    useEffect(() => {
        // conn();
        conn.connect();
        console.log(conn);
    }, []);

    return (
        <>
            <h1>Chat App In React Js</h1>
            <hr/>
            <div className="row">
                <div className="col-4 chat-room pt-1" id="chat-room">
                    {
                        !showChats && chatRooms && (
                            <h2>Chat Rooms</h2>
                        )
                    }
                    {
                        showChats && chats && (<button className="btn btn-primary mb-1" onClick={handleBackButton}>Volver</button>)
                    }
                    {
                        showChats && chats && (
                            <h2>Users Chats</h2>
                        )
                    }
                </div>
                <div className="col-8 chat-body" id="chat-body">
                    <h2>Body Chat</h2>
                </div>
            </div>
        </>
    )
}

if (document.getElementById('chatApp')) {
    ReactDOM.render(<ChatApp />, document.getElementById('chatApp'));
}