
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { collection, doc, getDocs, getFirestore, query, writeBatch } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzVxxlluPVN69IzA23vo3SNpsSfOY6pSA",
  authDomain: "pera-ecommerce.firebaseapp.com",
  projectId: "pera-ecommerce",
  storageBucket: "pera-ecommerce.appspot.com",
  messagingSenderId: "1022865294789",
  appId: "1:1022865294789:web:52f6fd295e1d964f0eb7ac"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore()

export const addCollentionAndDocuments = async (collentionKey, objectsToAdd) => {
  const collectionRef = collection(db, collentionKey)
  const batch = writeBatch(db)
  
  console.log("Inicio da função")

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
  const categoryMap  = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt:'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return

  return await createAuthUserWithEmailPassword(auth, email, password)
}