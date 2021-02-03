function onSignIn(googleUser)

{
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $("#container1").css("display", "none");
  $(".fb-btn").css("display", "none");
  $(".data").css("display", "block");
  $("#pic").attr("src", profile.getImageUrl());
  $("#email").text(profile.getEmail());
}

var firebaseConfig = {
  apiKey: "AIzaSyClmAvmUAdSF9SWqOrE6n8xaWrJ_82r9XU",
  authDomain: "website-login-180745.firebaseapp.com",
  projectId: "website-login-180745",
  storageBucket: "website-login-180745.appspot.com",
  messagingSenderId: "101761782700",
  appId: "1:101761782700:web:b272d6cd249f195b9b2009",
  measurementId: "G-0C1XHQ0VXV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById('email');
  var password = document.getElementById('psw');

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up!");
}
  function login() {
    var email = document.getElementById('email');
    var password = document.getElementById('psw');

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In! " + email);
}
