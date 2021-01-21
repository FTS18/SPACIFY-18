 var firebaseConfig = {
   apiKey: "AIzaSyCvUQPIpGYeg0U0c8cWDxEGy2p7ETzwrIM",
   authDomain: "login-form-65e7c.firebaseapp.com",
   projectId: "login-form-65e7c",
   storageBucket: "login-form-65e7c.appspot.com",
   messagingSenderId: "939571022879",
   appId: "1:939571022879:web:b6344b82665957d9b4d92a",
   measurementId: "G-T32FYF4BQT"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

 firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     document.getElementById("user_profile").style.display = 'block';
     document.getElementById("container1").style.display = 'none';

     var user = firebase.auth().currentUser;
     var name, email, photoUrl, uid, emailVerified;

     if (user != null) {
       name = user.displayName;
       email = user.email;
       photoUrl = user.photoURL;
       emailVerified = user.emailVerified;
       uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
       // this value to authenticate with your backend server, if
       // you have one. Use User.getToken() instead.
     }

   } else {
     document.getElementById("user_profile").style.display = 'none';
     document.getElementById("container1").style.display = 'block';
   }
 })

 function login() {
   var email = document.getElementById("email").value;
   var password = document.getElementById("psw").value;

   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;

     window.alert('Error : ' + errorMessage);
   });
 }