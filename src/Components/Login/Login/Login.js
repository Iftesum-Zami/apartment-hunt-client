import React, { useContext } from 'react';
import logo from '../../../photos/logos/Logo.png';
import googleIcon from '../../../photos/logos/google.png';
import './login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email: email };
      setLoggedInUser(signedInUser);
      // storeAuthToken();
      history.replace(from);
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  // const storeAuthToken = () => {
  //   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  //   .then(function(idToken) {
  //     sessionStorage.setItem('token', idToken)
  //   })
  //   .catch(function(error) {
  //     // Handle error
  //   });
  // }

  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex justify-content-center">
            <div className="borderStyle">
            <h4 className="text-center" style={{ margin: '30px'}}>Login with</h4>

            <div className="d-flex justify-content-center">
                <button className="googleBtn" onClick={handleGoogleSignIn}>
                    <img className='iconImg' src={googleIcon} alt="" />
                    <span>Continue with Google</span>
                </button>
            </div>

            <br />
            <p className="text-center">Don't have an account? <span><Link to="/login">Create an account</Link></span></p>
            </div>
        </div>
    </div>
  );
};

export default Login;