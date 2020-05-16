import React, { useEffect, useState, useRef } from 'react';

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
    <button><a href="/"> cliquer ici our aller au site client</a></button>
      <div onMouseOver={setMessage} onMouseOut={clearMessage} className="leftBox" >
        <button  className="btn-welcome">Connexion</button>
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