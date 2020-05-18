import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    const main = useRef(null);
    const nouveuEL = document.createElement("h1");
    nouveuEL.textContent = 'Gestion du Produit reservé aux personels du restaurant';
    const setMessage = () => {
        main.current.appendChild(nouveuEL);
    }
    const clearMessage = () => {
        main.current.removeChild(nouveuEL);
    }
    useEffect(() => {
        main.current.classList.add("homeImg");
        setTimeout(() => {
                main.current.classList.remove("homeImg");
        }, 500)
    }, [])
    return (
        <main ref={main} className="welcomePage" onMouseOver={setMessage} onMouseOut={clearMessage} >
            <Link to="/login"><button className="btn-welcome">Connexion</button></Link>
        </main>
    )
}

export default Landing
