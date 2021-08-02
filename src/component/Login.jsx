import React, { useContext } from 'react';
import { Context } from '..';
import style from './../App.module.css'
import firebase from 'firebase';

const Login = () => {
    

    const {auth} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }


    return (
        <div className={style.containerLogin}>
            <div className={style.login}>
                <button onClick={login}>Авторизоваться с помощью Google</button>
            </div>
        </div>
    );
};

export default Login;