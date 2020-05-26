import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Pagination = ({ nbrProduitsParPage,totalPoroduits,paginate}) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalPoroduits/nbrProduitsParPage); index++) {
       pageNumbers.push(index);
    }
    return (
        <nav>
           <ul className="pagination">
               {
                   pageNumbers.map(number=>(
                       <li key={number}  className="page-item">
                        <a onClick={()=>paginate(number)} href ="#!" className="page-link">
                            {number}
                        </a>
                       </li>
                   ))
               }
           </ul>
        </nav>
    )
}

export default Pagination
