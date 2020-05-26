import React from 'react'

const Pagination = ({ nbrProduitsParPage,totalPoroduits}) => {
    console.log( Math.ceil(totalPoroduits/nbrProduitsParPage))
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalPoroduits/nbrProduitsParPage); index++) {
       pageNumbers.push(index);
    }
    return (
        <nav>
           <ul>
               {
                   pageNumbers.map(number=>(
                       <li key={number}>
                        <a href ="!#">
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
