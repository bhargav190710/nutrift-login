import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  // PASTE YOUR CONFIG HERE (Same as your login page)
  apiKey: "AIzaSyAWI81lV2b6qrm_mQh1HmNe5iu07h491mM",
    authDomain: "776638956026-27pnb46djao1hiikgqoetepppp9b3a9p.apps.googleusercontent.com",
    projectId: "nutrify-8b60d",
    storageBucket: "nutrify-8b60d.firebasestorage.app",
    messagingSenderId: "776638956026-27pnb46djao1hiikgqoetepppp9b3a9p.apps.googleusercontent.com",
    appId: "1:776638956026:android:8caa5ff66e91238093a443"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpBtn = document.getElementById('signUpBtn');
const messageDiv = document.getElementById('message');

signUpBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        messageDiv.className = "error-msg";
        messageDiv.innerText = "Passwords do not match.";
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            messageDiv.className = "success-msg";
            messageDiv.innerText = "Account created successfully! You can now log in.";
            
            // Optional: Redirect to login page after 2 seconds
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        })
        .catch((error) => {
            messageDiv.className = "error-msg";
            messageDiv.innerText = "Error: " + error.message;
        });
});

