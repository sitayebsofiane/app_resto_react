import React, { useEffect, useState, Fragment } from 'react';

const Header = () => {
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBtn(true);
    }, 3000)
  }, [])
  const display = btn && (
    <Fragment className="banner-container">
      <div className="leftBox">
          <h1><a href="/">Gestion RESTO</a></h1>
          <button className="btn-welcome">Connexion</button>
        </div>
    </Fragment>
  )
  return (
    <header>
      {display}
    </header>
  )
}
export default Header;