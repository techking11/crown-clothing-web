import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from "firebase/firestore";

import toast from "react-hot-toast";
import { Category } from "../../store/product/product.type";

const firebaseConfig = {
  apiKey: "AIzaSyDrOrlA-VfssPCCeFLNWfM6fo2XYJVpoRQ",
  authDomain: "crown-clothing-db-6f51e.firebaseapp.com",
  projectId: "crown-clothing-db-6f51e",
  storageBucket: "crown-clothing-db-6f51e.appspot.com",
  messagingSenderId: "574934185748",
  appId: "1:574934185748:web:c3754ec598deea1a32f401"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export type objectToAdd = {
  title: string;
}

export const createCategoriesWithCollectionAndDocument = async <T extends objectToAdd>(
  collectionKey: string,
  objectToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
}

export const getCategoriesWithCollection = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
}

export type AdditionalInfo = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  email: string;
  displayName: string;
}

export const createCustomUserFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      toast.error("Error: " + error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createUserWithGoogleEmailandPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signinUserWithGoogleEmailandPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },

      reject
    );
  });
}