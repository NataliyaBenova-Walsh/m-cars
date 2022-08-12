
import image1 from './woman-car-key.jpg';
import image2 from './img05.jpg';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
	
    return (
		<>
		<section className="hero">
		<div className="heroContainer">
			<h1>Rent cars <span className="highlighted">from your community</span></h1>
			<p>Instantly search for and book vehicles from trusted owners</p>
		</div>
		<div className="heroContainer">
			<div className="imgContainer">
				<img src={image1} className={styles.heroImg} alt="woman" width="500" height="300"/>
			</div>
		</div>
		
	</section>
        <div id="page">
			<div id="content">
				<div className="post">
					<h2 className="title"><a href="/">Welcome to Mcars </a></h2>
					<div className="entry">
						<p><a href="/"><img src={image2} width="600" height="170" alt="" /></a></p>
                    	<p>Why rent with <strong>M Cars</strong>?MCars is a free platform that makes car sharing easier than ever</p>
						<p>The Mcars app makes it easy to discover, book and unlock affordable vehicles from owners in your area. Take your pick from dazzling electric city cars to family SUVs with plenty of storage. Skip the counter today and join the car sharing revolution.</p>
                    
					
						<div className="links"><Link to="/register" className="registerBtn">Register</Link></div>
					</div>
				</div>
			</div>
	
		</div>
	</>
    );
}

