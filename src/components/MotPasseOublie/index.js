import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MotDePasseOublie = () => {
    const [email, setEmail] = useState('')
    const handleSubmit=()=>{

    }
    return (
        <div className="sigUpLoginBox">
        <div>
            <div className="slContainer">
                 <div className="formBoxleftForget">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                      
                        <h2>Mot de passe oublié ?</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required />
                                <label htmlFor="email">Email</label>
                            </div>
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Dèja inscrit ? Connecter vous .</Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default MotDePasseOublie;
