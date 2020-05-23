import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB8pByCcsA37oCM_h3UZ55UCOz2v8_XiGI",
    authDomain: "resto-932f9.firebaseapp.com",
    databaseURL: "https://resto-932f9.firebaseio.com",
    projectId: "resto-932f9",
    storageBucket: "resto-932f9.appspot.com",
    messagingSenderId: "244172838936",
    appId: "1:244172838936:web:a4000ae5e139b8f948cb6d"
  };
class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db =app.firestore();
    }
    //inscription
    signUpUser = (email,password) => this.auth.createUserWithEmailAndPassword(email,password);
    
    //connexion
    loginUser = (email,password)=>this.auth.signInWithEmailAndPassword(email,password);
    
    //deconnexion
    signOutUser = ()=>this.auth.signOut();
    
    //recuperer le mot de passe 
    passwordReset = (email)=>this.auth.sendPasswordResetEmail(email);

    //enrigistrement user dans la base de donnée
    user = (uid) =>this.db.doc(`users/${uid}`);

}
export default Firebase;