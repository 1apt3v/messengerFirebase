import React, { useState } from 'react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';
import style from './../App.module.css'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './Loader';
import firebase from 'firebase';

const Chat = () => {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <div className={style.chatArea}>
                <div className={style.messangerArea}>
                    {messages.map(message => {
                        return <div style={{
                            marginLeft: user.uid === message.uid ? 'auto' : '0'
                        }}>
                            <div className={style.chatMessage}>
                                <img src={message.photoURL} alt="" />
                                <div>{message.displayName}</div>
                            </div>
                            <div>{message.text}</div>
                        </div>
                    })}
                </div>
                <div>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;