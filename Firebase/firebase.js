import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBgz5Do6QLZVOg22mfecmt0_T54DA4-IvU",
  authDomain: "ecommerce-website-2a69a.firebaseapp.com",
  projectId: "ecommerce-website-2a69a",
  storageBucket: "ecommerce-website-2a69a.appspot.com",
  messagingSenderId: "624504542506",
  appId: "1:624504542506:web:b58104a18064be4e90fa53"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export {
  ref,
  uploadBytes,
  getDownloadURL
}