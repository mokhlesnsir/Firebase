 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAnBnbDNh58VNCG9TEk3WovL9aYv_OrFWs",
    authDomain: "project1-ec220.firebaseapp.com",
    databaseURL: "https://project1-ec220.firebaseio.com",
    projectId: "project1-ec220",
    storageBucket: "project1-ec220.appspot.com",
    messagingSenderId: "351252536162"
  };
  firebase.initializeApp(config);
// Listen for form submit
// Reference messages collection
var messagesRef = firebase.database().ref('Contact');
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var nom = getInputVal('nom');
  var prenom = getInputVal('prenom');
  var adresse = getInputVal('adresse');
  // Save message
  saveMessage(nom,prenom,adresse);

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nom,prenom,adresse){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nom: nom,
    prenom: prenom,
    adresse: adresse
  });
}