import React, { useState, Fragment, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import Produits from '../Produits.js';
import AjoutProduit from '../AjoutProduit';

const styleInscription = {
    display: 'inline-block',
}
const Welcome = (props) => {
    const firebase = useContext(FirebaseContext);
    const [userSession, setUserSession] = useState(null);
    //variable d'etat des donner qui concerne un user
    const [userData, setUserData] = useState({})
    useEffect(() => {
        //cette fonction onAuthStateChanged verifie si l'user est connecter dans session
        let ecouteur = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : setTimeout(() => {
                props.history.push('/login');
            },2000);
        });
        if (userSession !== null) {
            // recuperation de doc user de firebase
            firebase.user(userSession.uid)
            .get()
            .then((doc) => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    setUserData(myData);
                }
            })
            .catch((error) => {
                console.log(error)
            });
        }
        return () => {
            ecouteur()
        };
    }, [firebase, props.history, userSession])
    return (
        userSession === null ? (
            <Fragment>
                <div className="loader"></div>
                <p style={{ textAlign: "center" }}>chargement ...</p>
            </Fragment>
        ) : (
            <div className="resto_bg">
                    <h1 style={{ color: "red" }}>Bienvenue: { userData.pseudo }</h1>
                    <div style={styleInscription} className="leftBox" >
                        <Link to="/signup" className="btn-welcome">Inscription des utilisateurs</Link>
                    </div>
                    <div>
                        <Logout />
                        <AjoutProduit />
                        <Produits userData={userData} />
                    </div>
                </div>
            )
            
            )
        }
        export default Welcome;
