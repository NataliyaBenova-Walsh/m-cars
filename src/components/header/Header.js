
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../../firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export const Header = () => {
	const [ user, error] = useAuthState(auth);
	const navigate = useNavigate();

	const onLogout = async () => {
		await logout();
		navigate('/');
	}

	const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
              

	<section id="header-wrapper">

		<div id="header">
		<nav className='nav-menu'>
					<div id="logo">
						<h1 id="logo-title"><Link className='logo-link' to="/">M CARS</Link></h1>
					</div>

					<button 
						className='hamburger'
						onClick={()=> {
							setIsNavExpanded(!isNavExpanded);
						}}>
							{isNavExpanded 
							? <FontAwesomeIcon icon={faXmark} inverse className='icon-menu icon-x'/>
							: <FontAwesomeIcon icon={faBars} inverse className='icon-menu icon-bars'/>}
						
						
					</button>

			<div className={
				isNavExpanded ? "menu expanded" : "menu"
			}>
				
			
					
					<ul className='nav-ul'>
						{user && <li className='welcomeUser'>Welcome {user.email}</li>}
						<li><Link to="/catalog">Available cars</Link></li>
						{ user ? 
						<div className='user'>
						
							<li><Link to="/create">Create Offer</Link></li>
							<li><button className='logoutBtn' onClick={onLogout}>Logout</button></li>
						</div> 
							:
						<div className='guest'>
							<li><Link to="/login">Login</Link></li>
                    		<li><Link to="/Register">Register</Link></li>
					</div>
					}
                    
					</ul>
					</div>
			</nav>
				
  					
			

		</div>
	</section>
	
	
	

    );
}