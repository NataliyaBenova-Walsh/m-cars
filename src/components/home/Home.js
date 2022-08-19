
import image1 from './woman-car-key.jpg';

import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faCar, faHouse } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
	
    return (
		<>
		<section className="hero">
			<div className="imgContainer">
					<img src={image1} className={styles.heroImg} alt="woman" />
			</div>

		<div className="heroContainer">
			<h1 className='hero-title'>Rent local cars <span className="highlighted">from your community</span></h1>
			<p className='hero-subtitle'>Instantly search for and book vehicles from trusted owners</p>
		</div>

		<div id="page">
			
				<div className="heroInfo">
							
            		<div className='hero-info-desc'>
						<div className="page-container">
							<div className='icon-container'><FontAwesomeIcon icon={faSackDollar} inverse className='icon'/></div>
							<h3 className='page-title'>Affordable option</h3>
							<p className='page-desc'>Carsharing is a lot cheaper than owning a car. MCar is the most affordable option for day and weekend trips.</p>
						</div>

						<div className="page-container">
							<div className='icon-container'><FontAwesomeIcon icon={faCar} inverse className='icon'/></div>
							<h3 className='page-title'>Range of cars</h3>
							<p className='page-desc'>Book hundreds of cars from individuals in your neighbourhood via the app. A city car, van or wedding car? Check!</p>
						</div>
						<div className="page-container">
							<div className='icon-container'><FontAwesomeIcon  icon={faHouse} inverse className='icon'/></div>
							<h3 className='page-title'>Greener city</h3>
							<p className='page-desc'>Go for a neighbourhood and even a city with more green than gray. Less parking means more space to live and enjoy outdoors!</p>
						</div>

				
				</div>
				<p className='page-last-info'><span>MCars</span> is a free platform that makes car sharing easier than ever.
				The Mcars app makes it easy to discover, book and unlock affordable vehicles from owners in your area.
			
				Skip the counter today and join the car sharing revolution.</p>			
           
			<div className="links">
				<Link to="/register" className="registerLink link">Register</Link>
				<Link to="/catalog" className='catalogLink link'>Check our offers</Link>
			</div>
			</div>
		</div>
	
		
		
	</section>
        
	</>
    );
}

