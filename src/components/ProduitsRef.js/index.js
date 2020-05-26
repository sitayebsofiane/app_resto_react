import React, { Component } from 'react';
import { FirebaseContext } from '../Firebase';
import './produit.module.css';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
class Produits extends Component {
   
        state = { 
            produitsRef:[],
            pageCourante:1,
            nbrProduitsParPage:3
        }

    componentDidMount(){
        const firebase = this.context;
        let tab = []
        firebase.affichageProduits()
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                tab.push({id:doc.id,name:doc.data().nom,dureeConservation:doc.data().dureeConservation});
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        }) 
        this.setState({ produitsRef:tab })
    }
    
    
    data = ()=>{ 
        //la pagination 
        const indexLastProduit=this.state.pageCourante*this.state.nbrProduitsParPage;
        const indexFirstProduit = indexLastProduit - this.state.nbrProduitsParPage;
        const currentProduits =this.state.produitsRef.slice(indexFirstProduit,indexLastProduit);
        const data = currentProduits.map((produit,index)=>{
            return(
                <tr key={index}>
                    <th scope="row">{produit.id}</th>
                    <td>{produit.name}</td>
                    <td>{produit.dureeConservation}</td>
                    <td><button>ajouter au stock</button></td>
                </tr>
            )
        })
        return data
    }
    // changer de page
    paginate = (pageNumber)=>{
        this.setState({
            pageCourante:pageNumber
        })
    }
    render() {
        return (
            <div className="resto-bg">
                <table>
                    <caption><Link to="/ajouterProduitRef" >Ajouter des produits de reference</Link></caption>
                    <thead>
                        <tr>
                            <th scope="col">idFirebase produit</th>
                            <th scope="col">Nom du produit  </th>
                            <th scope="col">Durée de Concervation</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* affichage des data */}
                    { this.data() }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total produits de references</th>
                            <td>{this.state.produitsRef.length}</td>
                            <th><Pagination
                             nbrProduitsParPage={this.state.nbrProduitsParPage} 
                            totalPoroduits={this.state.produitsRef.length}
                             paginate={this.paginate}
                                 
                             /></th>
                        </tr>
                    </tfoot>
                </table>
                
            </div>
            )
    }
}
Produits.contextType=FirebaseContext;
export default Produits;
