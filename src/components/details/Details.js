
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getCarById } from '../services/CarServices';




export const CarDetails = ({ car}) => {
    
    const { carId } = useParams();
    console.log(carId);
    const [currentCar, setCurrentCar] = useState({});

    useEffect(() => {
        const car = async () => {
            try {
                const data = await getCarById(carId);
                console.log(data)
                setCurrentCar(data);
             } catch(err) {
                alert(err);
             }
        }
        car()  
        
    }, [carId]);

   console.log(currentCar);
    
        
    

    return (
        <div className="car-container">
            <p><img src={currentCar.imgUrl} width="300" height="150" alt="" /></p>
			<h2>Model: {currentCar.carModel}</h2>
			<h3>Price from: {currentCar.price} </h3>
            <h4>Location: {currentCar.city}</h4>
            <p>Description: {currentCar.desc}</p>
			
			<div className="details-links">
                <Link className='details-link' to="/contact">Contact the owner</Link>
                <Link className='details-link' to={`/catalog/${carId}/edit`}>Edit</Link>
                <Link className='details-link' to="/delete">Delete</Link>
            </div>
		</div>
    );
}