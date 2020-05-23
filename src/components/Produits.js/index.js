import React, { Component, Fragment } from 'react'
import { FirebaseContext } from '../Firebase';
import './produit.module.css';
import { Link } from 'react-router-dom';
class Produits extends Component {
    static contextType = FirebaseContext;
    state = {
        userSession: null,
        dataProduit: {
            nom: '',
            dureeConcervation: 0
        }
    }
    componentDidMount() {
        this.context.auth.onAuthStateChanged(user => {
            user ? this.setState({ userSession: user }) : setTimeout(() => {
                this.props.history.push('/login');
            }, 2000);
        })();
        let value = this.context;
        console.log(value)
    }
    render() {
        return (
            this.state.userSession === null ? (
                <Fragment>
                    <div className="loader"></div>
                    <p style={{ textAlign: "center" }}>Loading ...</p>
                </Fragment>
            ) : (<div className="resto-bg">
                    <table>
                        <caption><Link to="/signup" >Ajouter des produits de reference</Link></caption>
                        <thead>
                            <tr>
                                <th scope="col">ID produit</th>
                                <th scope="col">Nom du produit </th>
                                <th scope="col">Durée de Concervation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Buzzcocks</th>
                                <td>pillon de poulet</td>
                                <td>120</td>
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
                </div>)
        )
    }
}
Produits.contextType = FirebaseContext;
export default Produits;
