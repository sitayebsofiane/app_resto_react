import React from 'react';
import { Link } from 'react-router-dom';
const styleInscription ={
    display:'inline-block',
    padding: '100px'

}
const Welcome = () => {
    return (
        <div className="resto_bg">
            <div>
                Welcome
            </div>
            <div style={styleInscription} className="leftBox" >
                <Link to="/signup" className="btn-welcome">Inscription</Link>
            </div>
        </div>
    )
}

export default Welcome;
