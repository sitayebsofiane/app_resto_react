import React, { useState, useContext, useEffect, Fragment } from 'react';
import { FirebaseContext } from '../Firebase';
import Logout from '../Logout';

const Signup = (props) => {
    const firebase = useContext(FirebaseContext);
    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    //creation dun etat utilisateur
    const [userSession, setUserSession] = useState(null);
    //je creer ici un etat pour les donnes user
    const [loginData, setLoginData] = useState(data);
    //je creer ici un etat pour les message d'erreur
    const [error, setError] = useState('');
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }
    useEffect(() => {
        //cette fonction onAuthStateChanged verifie si l'user est connecter dans session
        let ecouteur = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : setTimeout(() => {
                props.history.push('/login');
            }, 2000);
        });
        return () => {
            ecouteur()
        };
    }, [firebase, props.history])
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password , pseudo} = loginData;
        firebase.signUpUser(email, password)
            .then(authUser=>{
                    return firebase.user(authUser.user.uid).set({
                        pseudo:pseudo,
                        email:email
                    })
            })
            .then(() => {
                //ici je vide mon etat
                setLoginData({ ...data });
                //je le redirige vers la page(composant) welcome
                props.history.push('/login');

            })
            .catch(error => {
                setError(error);
                //ici je vide mon etat
                setLoginData({ ...data });
            })
    }
    const { pseudo, email, password, confirmPassword } = loginData;
    const btn = (pseudo === '' || email === '' || password === '' || password !== confirmPassword) ?
        <button disabled>Inscription</button> : <button >Inscription</button>
    //gestion du message d'erreur
    const errorMsg = error !== '' && <span>{error.message}</span>
    return (
        userSession === null ? (
            <Fragment>
                <div className="loader"></div>
                <p style={{ textAlign: "center" }}>chargement ...</p>
            </Fragment>
        ) : (<div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Inscription des utilisateurs</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" required />
                                <label htmlFor="confirmPassword">Confirmer le Mot de passe</label>
                            </div>
                            {btn}
                        </form>
                    </div>
                </div>
            </div>
            <div className="formBoxleftSignup">
                <Logout />
            </div>
        </div>
            )
    )
}
export default Signup;
