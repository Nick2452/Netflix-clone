import firebase from 'firebase'
const firebaseConfig = {
	apiKey: 'AIzaSyBVwKSCoDKsF0m1f-C_JIjrToZnhJW9NBY',
	authDomain: 'netflix-clone-5aec3.firebaseapp.com',
	projectId: 'netflix-clone-5aec3',
	storageBucket: 'netflix-clone-5aec3.appspot.com',
	messagingSenderId: '487150013338',
	appId: '1:487150013338:web:74041e3d21bbee8131c823',
	measurementId: 'G-0ZMZG7V88Q',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
