import { db } from '../../firebase-config';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { getDoc, updateDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { useContext } from 'react';
import AuthContext from '../services/AuthContext';




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
        const result = await updateDoc(carDocRef, {
        carModel: newCar.carModel,
        desc: newCar.desc,
        city: newCar.city,
        price: newCar.price,
        imgUrl: newCar.imgUrl,
         created: Timestamp.now()});
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


export const createCarOffer = async (newCar, ownerId) => {
    const carsRef = collection(db, 'cars');
    
    const carData = {
        carModel: newCar.carModel,
        desc: newCar.desc,
        city: newCar.city,
        price: newCar.price,
        imgUrl: newCar.imgUrl,
        created: Timestamp.now(),
        ownerId: ownerId
    };
        
    addDoc(carsRef, carData)
        .then(docRef => {
            console.log(carsRef.id);
            console.log(`New car was added successfully`)
        })
        .catch (err => {
            alert(err);
            console.log(err);
        }
            
        )
            
        
        
    
}

