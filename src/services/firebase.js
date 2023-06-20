// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  writeBatch,
  Query,
} from "firebase/firestore";
import clothes from "../clothes";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbay38B5Mz6_jl9jYwjxq8Ci79rBV3mpc",
  authDomain: "reacttpfinal-77a14.firebaseapp.com",
  projectId: "reacttpfinal-77a14",
  storageBucket: "reacttpfinal-77a14.appspot.com",
  messagingSenderId: "599408157193",
  appId: "1:599408157193:web:c77ee025ae91583ada4ed8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export async function getData(data,sexo) {
    console.log("a")
    const productCollectionRef = collection(db,"products")
    const q = query(productCollectionRef,orderBy("index"))
    const productsSnapshot = await getDocs(q);
    const arrayDocs = productsSnapshot.docs
    const dataDocs = arrayDocs.map((doc)=> {
        return {...doc.data(), id: doc.id}
    })
    return dataDocs
}
export async function getCategoryData(data,sexo) {
    const productCollectionRef = collection(db,"products")
    let q = undefined
    if (data != undefined & sexo != undefined) {
        q = query(productCollectionRef, where("tipo", "==", data), where("sexo", "==", sexo))
    } else if (data != undefined) {
        q = query(productCollectionRef, where("tipo", "==", data))
    } else {
        q = query(productCollectionRef, where("sexo", "==", sexo))
    } 
    const productsSnapshot = await getDocs(q)
    const arrayDocs = productsSnapshot.docs
    const dataDocs = arrayDocs.map((doc)=> {
        return {...doc.data(), id: doc.id}
    })
    return dataDocs
}
export async function getItem(id) {
    const productCollectionRef = collection(db,"products")
    const q = query(productCollectionRef, where("index", "==", parseInt(id) ))
    const productsSnapshot = await getDocs(q)
    const arrayDocs = productsSnapshot.docs
    const dataDocs = {...arrayDocs[0].data(), id: arrayDocs[0].id}
    return  dataDocs
}
export async function exportDataWithBatch() {
    const batch = writeBatch(db)
    const collectionRef = collection(db,"products")
    for (let item of clothes) {
        const docRef = doc(collectionRef)
        batch.set(docRef,item)
    }
    await batch.commit()
    console.log("items exportados")
}
