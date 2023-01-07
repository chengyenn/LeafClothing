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

    // REGISTER DOM ELEMENTS
    const $email = $('#email');
    const $password = $('#password');
    const $btnSignIn = $('#btnSignIn');
    const $btnSignUp = $('#btnSignUp');
    const $signOut = $('#signOut');
    // const $signInfo = $('#sign-info');

    // SignIn
    $btnSignIn.click(function(e){
        auth.signInWithEmailAndPassword($email.val(), $password.val())
        .then(function (e) {
            // $btnSignIn.html(`Sign In`);
            window.location.href = "../index6.html";
        })
        .catch(function(e){
            alert(e.message);
        });
    });

    // SignUp
    $btnSignUp.click(function(e){
        auth.createUserWithEmailAndPassword($email.val(), $password.val())
        .then(function () {
            const user = auth.currentUser;
            user.updateProfile({
                displayName: $('#surname').val() + $('#name').val()
            })
            .then(function () {
                // $btnSignUp.html(`Sign Up`);
                $email.val('');
                $password.val('');
                window.location.href = "../index6.html";
            });
        })
        .catch(function (e) {
            alert(e.message);
        });
    });

    // Listening Login User
    auth.onAuthStateChanged(function(user){
        if(user) {
            console.log(user);
        } else {
            console.log("not logged in");
        }
    });

    // Signout
    $signOut.click(function(){
        $email.val('');
        $password.val('');
        auth.signOut()
        .then(function (e) {
            window.location.href = "../index3.html";
        })
    });
});
