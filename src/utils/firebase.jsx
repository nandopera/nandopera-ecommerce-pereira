// firebase.js

import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  writeBatch,
} from 'firebase/firestore'

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzVxxlluPVN69IzA23vo3SNpsSfOY6pSA",
  authDomain: "pera-ecommerce.firebaseapp.com",
  projectId: "pera-ecommerce",
  storageBucket: "pera-ecommerce.appspot.com",
  messagingSenderId: "1022865294789",
  appId: "1:1022865294789:web:52f6fd295e1d964f0eb7ac"
}

const app = initializeApp(firebaseConfig)

// Firestore
export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  console.log("Início da função")

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log("done")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q)
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

// Autenticação
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// ✅ Função corrigida — cria usuário com e-mail e senha
export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}