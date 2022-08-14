import { db } from '../../firebase-config';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';



export const CarDetails = ({ car }) => {
    
    
    return (
        <div className="car-container">
            <p><img src={car.imgUrl} width="300" height="150" alt="" /></p>
			<h2>Model: {car.carModel}</h2>
			<h3>Price from: {car.price} </h3>
            <h4>Location: {car.city}</h4>
			
			<div className="details-btns">
                <Link>Contact the owner</Link>
                <Link>Edit</Link>
                <Link>Delete</Link>
            </div>
		</div>
    );
}