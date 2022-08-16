import React, { useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signIn } from '../../firebase-config';



export const Login = () => {

	/*const onSubmit = (e) => {
		e.preventDefault();

		const {
			email,
			password
		} = Object.fromEntries(new FormData(e.target));
		console.log(email);
		console.log(password);
	}*/
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, seterror] = useState("");
	const handleSubmit = async (e) => {
	e.preventDefault();
	setEmail("");
	setPassword("");
	const res = await signIn(email, password);
	navigate('/catalog');
	if (res.error) seterror(res.error);
	};
	
    return (
        <section className="loginPage">
            <div className="login_container">
	<div className="screen">
		<div className="screen__content">
			<form onSubmit={handleSubmit} className="login" >
				<div className="login__field">
					
					<label htmlFor="email" className='loginLabel'>Email:</label>
					<input type="text" 
					className="login__input" 
					name='email' 
					id='email' 
					
					value={email}
					onChange={(e) => setEmail(e.target.value)}/>
					
				</div>
				<div className="login__field">
				<label htmlFor="email" className='loginLabel'>Password:</label>
					<input typeName="password" 
					class="login__input" 
					name='password' 
					id='password' 
					
					value={password}
					onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button className="button login__submit"
						>
					Login
				</button>				
			</form>
        <div className='notUser'>
            <p>Don't have a profile yet? Sign up <Link to="/register">here</Link></p>
        </div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </section>
    );
}