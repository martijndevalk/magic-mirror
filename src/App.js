import React from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

function App() {
  const config = {
    apiKey: "AIzaSyALnYw32OjvLA5JJmXZtQclC7XgDXr0c7w",
    authDomain: "magic-mirror-172df.firebaseapp.com",
    databaseURL: "https://magic-mirror-172df.firebaseio.com",
    projectId: "magic-mirror-172df",
    storageBucket: "magic-mirror-172df.appspot.com",
    messagingSenderId: "164338707361",
    appId: "1:164338707361:web:a3dd3e304ce5f569ea79e0",
    measurementId: "G-HYRS8B3DBN"
  };

  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  var smilingRef = database.ref('message_list/M1jqFxvAlteRcZQDEtB');

  smilingRef.on('smiling', function(snapshot) {
    console.log(snapshot.val());
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;



