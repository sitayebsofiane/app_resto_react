import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBtn(true);
    }, 1000)
  }, [])
 
  const display = btn && (
    <div  className="banner-container">
    <Link to ="/">cliquer ici pour aller au site client</Link>
      <div className="leftBox" >
        <h1> Bienvenue restaurant de roubaix </h1>
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