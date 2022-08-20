import { db } from '../../firebase-config';
import {collection, addDoc, Timestamp, getDoc, updateDoc, deleteDoc, getDocs, doc, query, where } from 'firebase/firestore';


export const getCarById = async (id) => {


    const carRef = doc(db, "cars", id);
    const carSnap = await getDoc(carRef);
    let carData = carSnap.data();

    if (carSnap.exists()) {

      console.log("Car data:", carData);
      return carData;
    }
    else {
 
      console.log("No such!");
    }
}

export const editCar = async(carId, newData) => {
    
    const carDocRef = doc(db, 'cars', carId);
    try {
        const carRef = doc(db, "cars", carId);
        
        const result = await updateDoc(carRef, newData );
            console.log(result);
            
            
    } catch (err) {
        alert(err);
    }

    
}

export const delCar =async  (carId) => {
    const carRef = doc(db, "cars", carId);
    try {
        const result = await deleteDoc(carRef);
    console.log(`Deleted:`);
    } catch(err) {
        console.log(err);
    }
    
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

            console.log(`New car was added successfully`);
        })
        .catch (err => {
            alert(err);
            console.log(err);
        }   
        )
}

export const searchCars = async (city) => {
        const result = [];
        const carsRef = collection(db, "cars");
        const q = query(carsRef, where("city", "==", city));
          try {
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc)=> {
              result.push(doc.data());
             
                console.log(doc.id, "-", doc.data());
                
            });
          } catch(err) {
            console.log(err);
          }
          console.log(result);
              
}
