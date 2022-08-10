import { Link } from 'react-router-dom';

export const Header = () => {
    return (
              
<div id="wrapper">
	<section id="header-wrapper">
		<div id="header" className="container">
			<div id="logo">
				<h1><Link to="/">M CARS</Link></h1>
			</div>
			<nav className="menu">
				<ul>
				<	li><Link to="/catalog">Available cars</Link></li>
					<div className='user'>
						<li><Link to="/create">Create Offer</Link></li>
						<li><Link to="/logout">Logout</Link></li>
					</div>
					<div className='guest'>
						<li><Link to="/login">Login</Link></li>
                    	<li><Link to="/Register">Register</Link></li>
					</div>
					
					
					
                    
				</ul>
			</nav>
		</div>
	</section>
	
	
	
</div>
    );
}