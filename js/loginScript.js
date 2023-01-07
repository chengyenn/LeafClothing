$(document).ready(function(){

    // Initialize Firebase
    firebase.initializeApp({
        apiKey: "AIzaSyBMJUebx1GMqfdCA-XaP35oyKGH-AgiV2U",
        authDomain: "finalproject-b039c.firebaseapp.com",
        projectId: "finalproject-b039c",
        storageBucket: "finalproject-b039c.appspot.com",
        messagingSenderId: "501590789422",
        appId: "1:501590789422:web:0c6e94aaef920e7891bebf"
    });
    // Reference Firebase Auth
    const auth = firebase.auth();
    
    // Listening Login User
    auth.onAuthStateChanged(function(user){
        if(user) {
            console.log(user);
            $(".memberLink").attr("href","index6.html");
            // window.location.href="../index6.html";
        } else {
            console.log("not logged in");
            $(".memberLink").attr("href","index3.html");
        }
    });
});
