import { Link } from 'react-router-dom';
import styles from './Catalog.module.css';
export const CatalogItem = ({ car }) => {
    
    return (
        <div className="car-container">
            <div className='car-img-container'><img src={car.imgUrl} className={styles.carImg} width="300" height="150" alt="" /></div>
            <div className='car-info'>
                <h2>Model: <span className='bold'>{car.carModel}</span></h2>
			    <h3>Price from: <span className='bold'>{car.price} </span>&euro; per day </h3>
                <h4>Location: <span className='bold'>{car.city}</span></h4>
                <div className="detailsLink"><Link to={`/catalog/${car.id}`}>Details</Link></div>
            </div>
			
			
			
		</div>
    );
}