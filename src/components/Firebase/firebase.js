import app from 'firebase/app';
import 'firebase/auth';
require('dotenv').config()

const config = {
  apiKey: "AIzaSyCcNXC25DjJcI9l7iKvIK0183VAWNxu9Ag",
  authDomain: "kovepages.firebaseapp.com",
  databaseURL: "https://kovepages.firebaseio.com",
  projectId: "kovepages",
  storageBucket: "kovepages.appspot.com",
  messagingSenderId: "559337801228"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth Api ***

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;