
import { Link, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { register} from '../../firebase-config'
import {  } from 'firebase/firestore';




export const Register = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({});
	const handleInput = (e) => {
		let newInput = {[e.target.name] : e.target.value};
		setData({...data, ...newInput});
	}
	

	const submit = async (e) =>  {
		e.preventDefault();
		if (!data.firstName) {
			alert("Please enter first name");
		} else if(!data.lastName) {
			alert("Please enter last name");
		} else if (data.password != data.confirmPassword) {
		alert ("Passwords do not match");
		} else {
			register(data);
			navigate('/catalog');
		}
	}	
	return (
        <section className="registerPage">
            <div className="register_container">
				<div className="screen">
					<div className="screen__content">
					
						<form onSubmit={submit} className="register">
            				<div className="register__field">
								<label className='register__label' htmlFor="firstName">First name:</label>
								<input type="text"
									className="register__input" 
									name='firstName' 
									id='firstName' 
									
									
									onChange={(e)=>(handleInput(e))}
									/>
				</div>
                <div className="register__field">
				<label className='register__label' htmlFor="lastName">Last name:</label>
					<input type="text" 
					className="register__input"
					 name='lastName' 
					 id='lastName'
					
					  
					  onChange={(e)=>(handleInput(e))} />
				</div>
                <div className="register__field">
				<label className='register__label' htmlFor="email">Email:</label>
					<input typeName="email" 
					class="register__input"
					 name='email' 
					 id='email'
					 onChange={(e)=>(handleInput(e))}/>
				</div>
               
				
				<div className="register__field">
				<label className='register__label' htmlFor="password">Password:</label>
					<input typeName="password" 
					class="register__input" 
					name='password' 
					id='password' 
				
					
					onChange={(e)=>(handleInput(e))}/>
				</div>
                <div className="register__field">
				<label className='register__label' htmlFor="confirmPassword">Confirm password:</label>
					<input typeName="password"
					 class="register__input" 
					 name='confirmPassword'
					  id='confirmPassword' 
					
					  onChange={(e)=>(handleInput(e))}
					 
					  />
				</div>
			
				<button type="submit" className="button register__submit">
					Register
				</button>				
			</form>
        <div className='isUser'>
            <p>You already have a profile?</p>
            <p> Click <Link to="/login">here</Link> to login</p>
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
