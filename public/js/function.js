function configureApp() {
    const firebaseConfig = {
        apiKey: "AIzaSyD1nf9aqu6TtGAtEMwt_V2YkoiYgXAYN6Q",
        authDomain: "bank-app-97550.firebaseapp.com",
        projectId: "bank-app-97550",
        storageBucket: "bank-app-97550.appspot.com",
        messagingSenderId: "91753033581",
        appId: "1:91753033581:web:65d75071d038a426bc7464"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert("You logged out")
        window.location.href = "login.html"
    }).catch((error) => {
        // An error happened.
        console.log(error);
        alert("cannot log out")
    });
}

function authenticateUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            username.innerHTML = user.email;
            console.log(user);
            currentUser = user;
        } else {
            // User is signed out
            alert("There is no user logged in");
            window.location.href = "login.html"
        }
    });
}