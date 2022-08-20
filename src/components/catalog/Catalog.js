import { CatalogItem} from './CatalogItem';
import React, { useState, useEffect } from "react";
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';


export const Catalog = () => {
    
  const [cars, setCars] = useState([]);
  const carsCollRef = collection(db, "cars");

  useEffect(() => {
  

    const getCars = async() => {
      const data = await getDocs(carsCollRef);
   
      setCars(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
    }
    getCars();
  }, []);
   
    return (
        <div id="featured-content">
       
       
        {cars.length > 0 
            ? cars.map(x => <CatalogItem car={x}  key={x.id} />)
            : <h3 className='noCars'>No car offers yet</h3>}
		
		
	    </div>

    );
}