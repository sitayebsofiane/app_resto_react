import React, { Component } from 'react'
import './produit.module.css';
import { Link } from 'react-router-dom';
class Produits extends Component {
    
    render() {
      
        return (
            <div className="resto-bg">
                <table>
                    <caption><Link to="/signup" >Ajouter des produits de reference</Link></caption>
                    <thead>
                        <tr>
                            <th scope="col">ID produit</th>
                            <th scope="col">Nom du produit  </th>
                            <th scope="col">Durée de Concervation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.idProduit}</th>
                            <td>{this.props.produits.nom}</td>
                            <td>{this.props.produits.dureeConservation}</td>
                            <td><button>ajouter au stock</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colSpan="2">Total produits</th>
                            <td colSpan="2">77</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            )

    }
}
export default Produits;
