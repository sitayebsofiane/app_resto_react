import React, { useContext } from 'react';
import { FirebaseContext } from '../Firebase';




const AjoutProduit = (props) => {
    const firebase = useContext(FirebaseContext);
    console.log(firebase)
    return (

        <div className="resto_bg">
            <div>
               
            </div>
        </div>
    )


}
export default AjoutProduit;
