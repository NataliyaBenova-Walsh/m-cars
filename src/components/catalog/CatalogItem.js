import { Link } from 'react-router-dom';

export const CatalogItem = ({ car }) => {
    return (
        <div id="column1">
            <p><img src={car.imgUrl} width="300" height="150" alt="" /></p>
			<h2>Model: {car.carModel}</h2>
			<h3>Price from: {car.price}</h3>
            <h4>Location: {car.location}</h4>
			
			<p className="button"><Link to="/details">Details</Link></p>
		</div>
    );
}