
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, addDoc } from "@firebase/firestore";
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBh6jBiwWkl-0z8iwzvE2RrdtW4Z68UA_M",
  authDomain: "m-cars-56c97.firebaseapp.com",
  databaseURL: "https://m-cars-56c97-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "m-cars-56c97",
  storageBucket: "m-cars-56c97.appspot.com",
  messagingSenderId: "233610843593",
  appId: "1:233610843593:web:c9cc5f4bea1edb3f734418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);

const signUp = async (firstName, lastName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,

    });
    
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const register = async(data) => {
  try {
  const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = res.user;
  let usersCollRef = collection(db, "users");
  addDoc(usersCollRef, {
    uid: user.uid,
    email: user.email,
		firstName: data.firstName,
		lastName: data.lastName,
		
	});
    
		alert("Success");
	} catch(err) {
		alert(err.message)
	}
}

const signIn = async (auth, email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    
    
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  
  } catch (err) {
    alert(err);
  }
 
};

export {
  auth,
  db,
 signIn,
 logout,
 signUp, 
 register
};
