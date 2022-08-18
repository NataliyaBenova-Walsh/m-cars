import {db} from '../../firebase-config';
import {collection, query, where, getDoc, doc, getDocs} from 'firebase/firestore';
import { async } from '@firebase/util';


export const getUserById = async (id) => {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    let userData = userSnap.data();
    
    if (userSnap.exists()) {
    
      console.log("user data:", userData);
      return userData;
    }
    else {
      // doc.data() will be undefined in this case
      console.log("No such!");
    }
    }

export const getUserByUid = async (uid) => {

  const usersRef = collection(db, "users");
  const q = query(usersRef, where("uid", "==", uid));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=> {
          console.log(doc.id, "-", doc.data());
      });

      
      } catch(err) {
          alert(err)
      }
    

    
}