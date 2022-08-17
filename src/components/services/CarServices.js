import { db } from '../../firebase-config';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { getDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';

export const getCarById = async (id) => {


const carRef = doc(db, "cars", id);
const carSnap = await getDoc(carRef);
let carData = carSnap.data();

if (carSnap.exists()) {

  console.log("Car data:", carData);
  return carData;
}
else {
  // doc.data() will be undefined in this case
  console.log("No such!");
}
}

export const editCar = async(car, newCar, carId) => {
    
    const carDocRef = doc(db, 'cars', carId);
    try {
        const result = await updateDoc(carDocRef, {...newCar, created: Timestamp.now()});
        console.log(result);

    } catch (err) {
        alert(err);
    }
    
}

export const deleteCar = async (car) => {
    const carRef = doc(db, "cars", car.id);
    const result = await deleteDoc(carRef);
    console.log(`Deleted: ${result}`);
}

export const createCarOffer = async ({car}) => {
    try {
        await addDoc(collection(db, 'cars'), {...car, created: Timestamp.now()});
    } catch (err) {
        alert(err);
    }
    onclose();
}

