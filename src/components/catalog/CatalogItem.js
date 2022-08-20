import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../services/AuthContext';

import styles from './Catalog.module.css';
export const CatalogItem = ({ car }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const onDetails = async () => {
        if(!user) {
            alert("Please login in to see the details")
            return navigate('/login');
        }
        navigate(`/catalog/${car.id}`);
    }
    
    return (
        <div className="car-container">
            <div className='car-img-container'><img src={car.imgUrl} className={styles.carImg} width="300" height="150" alt="" /></div>
            <div className='car-info'>
                <h2>Model: <span className='bold'>{car.carModel}</span></h2>
			    <h3>Price from: <span className='bold'>{car.price} </span>&euro; per day </h3>
                <h4>Location: <span className='bold'>{car.city}</span></h4>
                <div className="detailsLink"><button onClick={onDetails} className="details-btn button">Details</button></div>
                
            </div>
			
			
			
		</div>
    );
}