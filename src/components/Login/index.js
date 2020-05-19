import React,{ useState,useEffect ,useContext} from 'react';
import { Link } from 'react-router-dom';
import {FirebaseContext} from '../Firebase';

const Login = (props) => {
    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error,setError] = useState('');
    //le tableau vide dans la fonction useEffect sert a dire que la fonction s'enclanche une fois 
    useEffect(()=>{
        if(password.length>5 && email !==''){
            setBtn(true)
        }else if(btn){
            setBtn(false)
        }
    },[password,email,btn])
    const handleSubmit = e=>{
        e.preventDefault();
        firebase.loginUser(email,password)
        .then(user=>{
            setEmail('');
            setEmail('');
            props.history.push('/welcome');
        })
        .catch(error=>{
            setError(error);
            setEmail('');
            setEmail('');
            //ici je vide mon etat
        })
    }
    return (
        <div className="sigUpLoginBox">
            <div>
                <div className="slContainer">
                     <div className="formBoxleftLogin">

                    </div>
                    <div className="formBoxRight">
                        <div className="formContent">
                            {error !== '' && <span>{error.message}</span>}
                            <h2>Connexion</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="inputBox">
                                    <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="inputBox">
                                    <input onChange={e=>setPassword(e.target.value)} value={password} type="password" required />
                                    <label htmlFor="password">Mot de passe</label>
                                </div>
                                {btn ? <button>Connexion</button>: <button disabled>Connexion</button>}
                                <br />
                                <Link className="simpleLink" to="/motpasseoublie">mot de passe oublier Recuperez-le ici </Link>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Login;
