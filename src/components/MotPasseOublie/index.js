import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase'

const MotDePasseOublie = (props) => {
    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.passwordReset(email)
            .then(() => {
                setError(null);
                setSuccess(`consulter votre email ${email} pour changer le mot de passe`);
                setEmail('');
                //on cas de success je met un peut de temps avant de redirigé la personne a la page de connexion
                setTimeout(() => {
                    props.history.push('/login');
                },5000)
            })
            .catch(error => {
                setError(error);
                setEmail('');
            })
    }
    const disabled = email === "";
    return (
        <div className="sigUpLoginBox">
            <div>
                <div className="slContainer">
                    <div className="formBoxleftForget">

                    </div>
                    <div className="formBoxRight">
                        <div className="formContent">
                            {success && <span style={{ border: "1px solid yellow", background: "green", color: "ffffff" }}>
                            {success}</span>}
                            {error && <span>{error.message}</span>}
                            <h2>Mot de passe oublié ?</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="inputBox">
                                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <button disabled={disabled}> Recuperer mot de passe</button>
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
