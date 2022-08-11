import { Link } from 'react-router-dom';

export const CatalogItem = ({ car }) => {
    
    return (
        <div className="car-container">
            <p><img src={car.imgUrl} width="300" height="150" alt="" /></p>
			<h2>Model: {car.carModel}</h2>
			<h3>Price from: {car.price} </h3>
            <h4>Location: {car.city}</h4>
			
			<p className="detailsLink"><Link to={`/catalog/${car.id}`}>Details</Link></p>
		</div>
    );
}