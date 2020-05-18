import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    const grif = useRef(null);
    const nouveuEL = document.createElement("h1");
    nouveuEL.innerHTML = '<h2>Gestion du Produit reservé aux personels du restaurant</h2>';
    const setMessage = () => {
        grif.current.appendChild(nouveuEL);
    }
    const clearMessage = () => {
        grif.current.removeChild(nouveuEL);
    }
    useEffect(() => {
        grif.current.classList.add("homeImg");
        setTimeout(() => {
            grif.current.classList.remove("homeImg");
        }, 2000)
    }, [])
    return (
        <main ref={grif} className="welcomePage" onMouseOver={setMessage} onMouseOut={clearMessage} >
            <Link to="/login"><button className="btn-welcome">Connexion</button></Link>
        </main>
    )
}

export default Landing
