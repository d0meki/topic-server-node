const firebase = require('../config/firebaseConfig')

const db = firebase.firestore();
const User = db.collection("users");
const Auth = firebase.auth(); //Authentication
module.exports = { User,Auth };