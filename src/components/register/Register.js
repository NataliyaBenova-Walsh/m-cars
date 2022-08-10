
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../firebase-config';


export const Register = () => {
	const usersCollRef = collection(db, "users");
	const [newFN, setNewFN] = useState('');
	const [newLN, setNewLN] = useState('');
	const [newEmail, setNewEmail] = useState('');
	const [newCity, setNewCity] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const createUser = async () => {
		await addDoc(usersCollRef,
					{firstName: newFN,
					lastName: newLN,
					email: newEmail,
					city: newCity,
					password: newPassword
		});
		
	}

    return (
        <section className="registerPage">
            <div className="register_container">
	<div className="screen">
		<div className="screen__content">
			<form className="register">
            <div className="register__field">
					<input type="text" className="register__input" name='firstName' id='firstName' placeholder="Fisrt Name" onChange={(event) => {setNewFN(event.target.value)}}/>
				</div>
                <div className="register__field">
					
					<input type="text" className="register__input" name='lastName' id='lastName' placeholder="Last Name" onChange={(event) => {setNewLN(event.target.value)}}/>
				</div>
                <div className="register__field">
					
					<input typeName="email" class="register__input" name='email' id='email' placeholder="Email" onChange={(event) => {setNewEmail(event.target.value)}}/>
				</div>
                <div className="register__field">
					
					<input typeName="text" class="register__input" name='city' id='city' placeholder="City" onChange={(event) => {setNewCity(event.target.value)}}/>
				</div>
				
				<div className="register__field">
					
					<input typeName="password" class="register__input" name='password' id='password' placeholder="Password" onChange={(event) => {setNewPassword(event.target.value)}}/>
				</div>
                <div className="register__field">
					
					<input typeName="password" class="register__input" name='repass' id='repass' placeholder="Repeat Password"/>
				</div>
				<button onClick={createUser} className="button register__submit">
					Register
				</button>				
			</form>
        <div className='isUser'>
            <p>You already have a profile?</p>
            <p> Click <Link to="/register">here</Link> to login</p>
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