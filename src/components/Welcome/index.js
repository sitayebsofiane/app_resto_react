import React,{ useState,Fragment,useContext,useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import Produits from '../Produits.js';

const styleInscription = {
    display: 'inline-block',
}
const Welcome = (props) => {
    const firebase = useContext(FirebaseContext);
    const [userSession, setUserSession] = useState(null);
    useEffect(() => {
        let ecouteur = firebase.auth.onAuthStateChanged(user=>{
            user ?setUserSession(user):props.history.push("/");
        });
        return () => {
           ecouteur()
        };
    }, [])
    const f = ()=>{
        setUserSession(null);
    }
    return (
        userSession === null ?(
            <Fragment>
                 <div className="loader"></div>
                 <p style={{ textAlign:"center" }} onClick={f}>Loading ...</p>
            </Fragment>   
        ):(
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
        
    )
}

export default Welcome;
