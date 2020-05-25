import React, { Component } from 'react';
import { FirebaseContext } from '../Firebase';
import './produit.module.css';
import { Link } from 'react-router-dom';
class Produits extends Component {
   
        state = { 
            produits:[]
        }

    componentDidMount(){
        const firebase = this.context;
        let tab = []
        firebase.db.collection("produits")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                tab.push({id:doc.id,name:doc.data().nom,dureeConservation:doc.data().dureeConservation});
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        }) 
        this.setState({ produits:tab })
    }
    
    
    data = ()=>{ 
        const data = this.state.produits.map((produit,index)=>{
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
                    {
                        this.data()
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colSpan="2">Total produits</th>
                            <td colSpan="2">{this.state.produits.length}</td>
                        </tr>
                    </tfoot>
                </table>
                
            </div>
            )

    }
}
Produits.contextType=FirebaseContext;
export default Produits;
