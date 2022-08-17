
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../../firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';


export const Header = () => {
	const [ user, error] = useAuthState(auth);
	const navigate = useNavigate();

	const onLogout = async () => {
		await logout();
		navigate('/');
	}
    return (
              
<div id="wrapper">
	<section id="header-wrapper">
		<div id="header" className="container">
			<div id="logo">
				<h1><Link to="/">M CARS</Link></h1>
			</div>
			<nav className="menu">
				<ul>
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
			</nav>
		</div>
	</section>
	
	
	
</div>
    );
}