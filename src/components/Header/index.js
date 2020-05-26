import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBtn(true);
    }, 1000)
  }, [])

  const display = btn && (
    <div className="banner-container">
      <Link to="/client">cliquer ici pour aller au site client</Link>
      <Link to="/"><h1> Bienvenue restaurant de Hénin-Beaumont </h1></Link>
    </div>
  )
  return (
    <header>
      {display}
    </header>
  )
}
export default Header;