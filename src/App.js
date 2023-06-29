import React from 'react';
import logo from './logo.svg';
import "./App.css"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth, login, logout } from "./features/counter/userSlice";
import firebase from "firebase/compat/app";


function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();

    // useEffect(() => {
    //   firebase.auth.onAuthStateChanged((userAuth) => {
    //     if (userAuth) {
    //       // user is logged in
    //       dispatch(
    //         login({
    //           email: userAuth.email,
    //           uid: userAuth.uid,
    //           displayName: userAuth.displayName,
    //           photoUrl: userAuth.photoURL,
    //         })
    //       );
    //     } else {
    //       // use is logged out
    //       dispatch(logout());
    //     }
    //   });
    // }, [dispatch]);

  
  return (
    <div className="app">
      {/* Header Area */}

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Header />
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
