
import image1 from './woman-car-key.jpg';

import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
	
    return (
		<>
		<section className="hero">
		<div className="heroContainer">
			<h1>Rent local cars <span className="highlighted">from your community</span></h1>
			<p>Instantly search for and book vehicles from trusted owners</p>
		</div>
		<div id="page">
			<div id="content">
				
				<div className="imgContainer">
					<img src={image1} className={styles.heroImg} alt="woman" />
				</div>

				<div className="heroInfo">
						
            <p className='hero-info-desc'>
				<p>Why rent with <strong>M Cars</strong>?</p>
				<p>MCars is a free platform that makes car sharing easier than ever.
				The Mcars app makes it easy to discover, book and unlock affordable vehicles from owners in your area.
				Take your pick from dazzling electric city cars to family SUVs with plenty of storage.
				Skip the counter today and join the car sharing revolution.</p>
			</p> 
                    
					
			<div className="links">
				<Link to="/register" className="registerLink link">Register</Link>
				<Link to="/catalog" className='catalogLink link'>Check our offers</Link>
			</div>
				</div>
			
			</div>
		</div>
	
		
		
	</section>
        
	</>
    );
}

