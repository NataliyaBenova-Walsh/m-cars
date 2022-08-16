import { db } from '../../firebase-config';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { getDoc, updateDoc, DeleteDoc, getDocs, doc } from 'firebase/firestore';

export const getCarById = async (id) => {


const carRef = doc(db, "cars", id);
const carSnap = await getDoc(carRef);
let carData = carSnap.data();

if (carSnap.exists()) {
    carData = {...carData, carId: id};
  console.log("Car data:", carData);
  return carData;
}
else {
  // doc.data() will be undefined in this case
  console.log("No such!");
}
}

export const editCar = async(carData, carId) => {
    const carDocRef = doc(db, 'cars', carId);
    try {
        await updateDoc(carDocRef, carData);
        

    } catch (err) {
        alert(err);
    }
}

export const createCarOffer = async ({car}) => {
    try {
        await addDoc(collection(db, 'cars'), {...car, created: Timestamp.now()});
    } catch (err) {
        alert(err);
    }
    onclose();
}

