import React, { Component } from 'react';
import { FirebaseContext } from '../Firebase';
import './produit.module.css';
import { Link } from 'react-router-dom';
class Produits extends Component {
   
        state = { 
            produitsRef:[]
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
        const data = this.state.produitsRef.map((produit,index)=>{
           
            return(
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <th scope="row">{produit.id}</th>
                    <td>{produit.name}</td>
                    <td>{produit.dureeConservation}</td>
                    <td><button>ajouter au stock</button></td>
                </tr>
            )
        })
        return data
    }
    render() {
        return (
            
            <div className="resto-bg">
          
                <table>
                    <caption><Link to="/ajouterProduitRef" >Ajouter des produits de reference</Link></caption>
                    <thead>
                        <tr>
                            <th scope="col">Index produit</th>
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
                            <th>pagination 123456789</th>
                        </tr>
                    </tfoot>
                </table>
                
            </div>
            )
    }
}
Produits.contextType=FirebaseContext;
export default Produits;
