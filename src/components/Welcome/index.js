import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import Produits from '../Produits.js';

const styleInscription = {
    display: 'inline-block',
    

}
const Welcome = () => {
    return (
        <div className="resto_bg">
            <div style={styleInscription} className="leftBox" >
                <Link to="/signup" className="btn-welcome">Inscription des utilisateurs</Link>
            </div>
            <div>
                <Logout />
                <Produits />
            </div>
        </div>
    )
}

export default Welcome;
