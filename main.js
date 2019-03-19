// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyD-yxLRm6MtJvQE6KjIqabPZ4FQHpjmkUU",
    authDomain: "self-storage-17c81.firebaseapp.com",
    databaseURL: "https://self-storage-17c81.firebaseio.com",
    projectId: "self-storage-17c81",
    storageBucket: "self-storage-17c81.appspot.com",
    messagingSenderId: "485107104477"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
   
    email:email,
    phone:phone,
    message:message
  });
}
