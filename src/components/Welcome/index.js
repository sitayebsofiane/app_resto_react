import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = () => {
    return (
        <div className="resto_bg">
            <div>
                Welcome
            </div>
            <div className="leftBox" >
                <Link to="/signup" className="btn-welcome">Inscription</Link>
            </div>
        </div>
    )
}

export default Welcome;
