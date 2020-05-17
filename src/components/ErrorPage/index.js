import React from 'react';
import batman from '../../images/batman.png';
const centreH2 = {
    textAlign: 'center',
    marginTop: '50px'
}

const ErrorPage = () => {
    return (
        <div className="resto-bg">
            <div className="container">
               <h2 style={centreH2}>Oups, cette page n'existe pas salam alikoum</h2>
               <img  src={batman} alt="error page" />
            </div>
        </div>
    )
}

export default ErrorPage;
