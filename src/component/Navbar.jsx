import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../App.module.css'
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';

const Navbar = () => {
    const { auth } = useContext(Context)

    const [user] = useAuthState(auth)

    return (
        <div className={style.navbar}>
            <div className={style.buttonAuth}>
                {user
                    ? (
                        <button onClick={() => auth.signOut()}>Выйти</button>
                    )
                    : (
                        <NavLink to="#">
                            <button>Авторизоваться</button>
                        </NavLink>
                    )}


            </div>
        </div >
    );
};

export default Navbar;