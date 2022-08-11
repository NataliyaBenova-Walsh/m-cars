
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { db} from '../../firebase-config'
import { addDoc, collection } from 'firebase/firestore';




export const Register = () => {
	let usersCollRef = collection(db, "users");
	const [data, setData] = useState({});
	const handleInput = (e) => {
		let newInput = {[e.target.name] : e.target.value};
		setData({...data, ...newInput});
	}
	

	const submit = async (e) =>  {
		e.preventDefault();
		/*if(!firstName) alert("Please enter first name");
		if(!lastName) alert("Please enter last name");
	if (password != confirmPassword) {
		alert ("Passwords do not match");
	} else {*/
	
	addDoc(usersCollRef, {
		firstName: data.firstName,
		lastName: data.lastName,
		email: data.email,
		password: data.password,
	}).then(() => {
		alert("Success");
	}).catch((err) => {
		alert(err.message)
	})
	
	
	};

	

	return (
        <section className="registerPage">
            <div className="register_container">
				<div className="screen">
					<div className="screen__content">
					
						<form onSubmit={submit} className="register">
            				<div className="register__field">
								<input type="text"
									className="register__input" 
									name='firstName' 
									id='firstName' 
									placeholder="First Name"
									
									onChange={(e)=>(handleInput(e))}
									/>
				</div>
                <div className="register__field">
					<input type="text" 
					className="register__input"
					 name='lastName' 
					 id='lastName'
					  placeholder="Last Name"
					  
					  onChange={(e)=>(handleInput(e))} />
				</div>
                <div className="register__field">
					<input typeName="email" 
					class="register__input"
					 name='email' 
					 id='email'
					  placeholder="Email" 
					  
					  onChange={(e)=>(handleInput(e))}/>
				</div>
               
				
				<div className="register__field">
					
					<input typeName="password" 
					class="register__input" 
					name='password' 
					id='password' 
					placeholder="Password"
					
					onChange={(e)=>(handleInput(e))}/>
				</div>
                <div className="register__field">
					
					<input typeName="password"
					 class="register__input" 
					 name='confirmPassword'
					  id='confirmPassword' 
					  placeholder="Confirm Password" 
					 
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



    
