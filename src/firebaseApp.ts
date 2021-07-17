import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE__AUTH_DOMAIN,
	projectId: import.meta.env.VITE__PROJECT__ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE__MESSAGI_SENDER_ID,
	appId: import.meta.env.VITE__API_ID,
	measurementId: import.meta.env.VITE__MEASUREMENT_ID
};


export const app = firebase.default.initializeApp(firebaseConfig);
app.analytics();

// import { useCollectionData, useCollection } from 'react-firebase-hooks/firestore';

 // const testCollection = app.firestore().collection('test');
  // const dbQuery = testCollection.where('lang', '==', lang);
  // const [data, loading, error] = useCollectionData(dbQuery, {
  //   idField: 'id',
  // });