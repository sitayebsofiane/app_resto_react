import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [btn, setBtn] = useState(false);
  const message = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setBtn(true);
    }, 1000)
  }, [])
  const nouveuEL = document.createElement("h1");
  nouveuEL.innerHTML='<h2>Gestion du Produit reservé aux personels du restaurant</h2>';
  const setMessage = () => {
    message.current.appendChild(nouveuEL);
  }
  const clearMessage = () => {
    message.current.removeChild(nouveuEL);
  }
  const display = btn && (
    <div ref={message} className="banner-container">
    <Link to ="/">cliquer ici our aller au site client</Link>
      <div onMouseOver={setMessage} onMouseOut={clearMessage} className="leftBox" >
        <Link to="/login" className="btn-welcome">Connexion</Link>
      </div>
    </div>
  )
  return (
    <header>
      {display}
    </header>
  )
}
export default Header;