import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div>
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;