import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './component/AppRouter';
import Loader from './component/Loader';
import Navbar from './component/Navbar';


function App() {
    const { auth } = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if(loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
