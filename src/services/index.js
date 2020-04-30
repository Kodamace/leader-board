import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDCWMcjaM4tQer-_228g1c20c7uwOY4u14',
  authDomain: 'leader-board-c3385.firebaseapp.com',
  databaseURL: 'https://leader-board-c3385.firebaseio.com',
  projectId: 'leader-board-c3385',
  storageBucket: 'leader-board-c3385.appspot.com',
  messagingSenderId: '964919982972',
  appId: '1:964919982972:web:cb1b6875d2567a818042f9',
  measurementId: 'G-MQZKC21ZQM',
}

firebase.initializeApp(config)

export default firebase.firestore()

export const getContestants = async () => {
  const snapshot = await firebase
    .firestore()
    .collection('contestants')
    .orderBy('points', 'desc')
    .get()
  return snapshot.docs.map((doc) => doc.data())
}
