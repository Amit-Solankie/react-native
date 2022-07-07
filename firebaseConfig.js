// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore, setLogLevel} from 'firebase/firestore';

setLogLevel('debug');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8Aj1A-1J8SShv5fOwHoaQPeo7VI_RA9U',
  authDomain: 'reactnativ-6a697.firebaseapp.com',
  projectId: 'reactnativ-6a697',
  storageBucket: 'reactnativ-6a697.appspot.com',
  messagingSenderId: '925565096514',
  appId: '1:925565096514:web:fdc066141b5df673b1d3db',
  measurementId: 'G-KVXDMW4Q29',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, {
  experimentalForceLongPolling: true,
});
// const analytics = getAnalytics(app);
