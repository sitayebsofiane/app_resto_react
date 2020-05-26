import React, { useState, useContext, useEffect, Fragment } from 'react';
import { FirebaseContext } from '../Firebase';
import Logout from '../Logout';

const AjoutProduitRef = (props) => {
    const firebase = useContext(FirebaseContext);
    const data = {
        nom: '',
        dureeConservation: ''
    }
    //creation d'un etat utilisateur
    const [userSession, setUserSession] = useState(null);
    //je creer ici un etat pour les donnes produit de reference
    const [produitData, setProduitData] = useState(data);
    //je creer ici un etat pour les message d'erreur
    const [error, setError] = useState('');
    const handleChange = (e) => {
        setProduitData({ ...produitData, [e.target.id]: e.target.value })
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
        //ici produitData c'est un document qui contient le nom et durree de conservation du produit de ref
        firebase.ajouterProduitRef(produitData)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            })
            .then(() => {
                //ici je vide mon etat
                setProduitData({ ...data });
                //je le redirige vers la page(composant) welcome
                props.history.push('/welcome');

            })
            .catch(error => {
                setError(error);
                //ici je vide mon etat
                setProduitData({ ...data });
            })
    }
    const { nom,  dureeConservation } = produitData;
    const btn = (nom === '' ||  dureeConservation === '' ) ?
        <button disabled>Ajouter</button> : <button >Ajouter</button>
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
                        <h2>ajouter le produit de reference</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={nom} type="text" id="nom" required />
                                <label htmlFor="nom">Nom</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value={dureeConservation} type="number" id="dureeConservation" required />
                                <label htmlFor="dureeConservation">Duree de conservation</label>
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
export default AjoutProduitRef;
