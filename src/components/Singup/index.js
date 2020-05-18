import React, { useState , useContext} from 'react';
import {FirebaseContext} from '../Firebase';

const Signup = () => {
    const firebase = useContext(FirebaseContext);
    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    //je creer ici un etat pour les donnes user
    const [loginData, setLoginData] = useState(data);
    //je creer ici un etat pour les message d'erreur
    const [error,setError] = useState('');
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const {email, password} = loginData;
        firebase.signUpUser(email,password)
        .then(user=>{
            //ici je vide mon etat
            setLoginData({...data});
        })
        .catch(error=>{
            setError(error);
            //ici je vide mon etat
            setLoginData({...data});
        })
    }
    const {pseudo, email, password, confirmPassword} = useState(data);
    const btn = (pseudo === '' || email === '' || password === '' || password !== confirmPassword) ?
                    <button disabled>Inscription</button> : <button >Inscription</button>
    //gestion du message d'erreur
    const errorMsg = error !== '' && <span>{error.message}</span>
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxleftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Inscription</h2>
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
        </div>
    )
}

export default Signup;
