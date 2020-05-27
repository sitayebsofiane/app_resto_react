import React from 'react';
import './stock.module.css';
// import Pagination from '../Pagination';

const Stock = (props) => {
    console.log(props.produitSentToStock)
    return (
        <div className="stock">
            <div>
                <p>Est fugiat do in enim voluptate enim culpa esse quis ut esse sit culpa.Ea duis consequat elit minim in.</p>
                <button>fermer</button>
            </div>
        </div>
    )
}

export default Stock;
