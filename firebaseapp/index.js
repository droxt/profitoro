// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBSFND6uoYGrGzW673mvYPpnqpLCHEZ300',
  authDomain: 'examensegunda-a2597.firebaseapp.com',
  databaseURL: 'https://examensegunda-a2597.firebaseio.com',
  projectId: 'examensegunda-a2597',
  storageBucket: 'examensegunda-a2597.appspot.com',
  messagingSenderId: '1069953488805'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
