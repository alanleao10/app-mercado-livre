import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWXc3RkggnfgH1DdlOeqTfohWhAAykT0o",
  authDomain: "clone-mercado.firebaseapp.com",
  projectId: "clone-mercado",
  storageBucket: "clone-mercado.appspot.com",
  messagingSenderId: "167650325323",
  appId: "1:167650325323:web:b404e5d524e9f42abaeece"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export const getProductsFromDb = async () => {
  const products = [];
  const snapshot = await db.collection('products').get();
  snapshot.forEach(doc => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};
