import React,{Component} from 'react'

class Produits extends Component {
    render(){

        return (
            <div className="resto-bg">
                <div className="container">
                    <h1 style={{ color: "red" }}>Pseudo: {this.props.userData.pseudo}</h1>
                </div>
            </div>
        )
    }
}

export default Produits;
