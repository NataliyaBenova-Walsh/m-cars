
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
    <div className='details-container'>
        <div className="details-car-container">
            <p><img src={currentCar.imgUrl} width="300" height="150" alt="" /></p>
			<h2 className='car-model'>Model: {currentCar.carModel}</h2>
			<h3 className='car-price'>Price from: {currentCar.price} </h3>
            <h4 className='car-location'>Location: {currentCar.city}</h4>
            <p className='cra-desc'>Description: {currentCar.desc}</p>
			
			<div className="details-links">
                <Link className='details-link' to={`/edit/${carId}`}>Edit</Link>
                <Link className='details-link' to={`/delete/${carId}`}>Delete</Link>
            </div>
		</div>

        <div className='details-car-container owner-container'>
            <h2 className='owner-title'>Owner details</h2>
            <p className='owner-p'>Here are the owner details feel free to send an enquire for updated prices and availability</p>
            
            <div className="contacts-owner">
				<div className='owner-card'>
                    <h3 className='owner-name'>Name:</h3>
                    <h3 className='owner-email'>Email: </h3>
                </div>
                  
                    	
            </div>
        
		</div>
			
             
           
        
    </div>
    );
}