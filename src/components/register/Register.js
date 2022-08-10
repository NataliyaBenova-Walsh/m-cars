
import { Link } from 'react-router-dom';


export const Register = () => {
    return (
        <section className="registerPage">
            <div className="register_container">
	<div className="screen">
		<div className="screen__content">
			<form class="register">
            <div className="register__field">
					
					<input type="text" className="register__input" name='firstName' id='firstName' placeholder="Fisrt Name"/>
				</div>
                <div className="register__field">
					
					<input type="text" className="register__input" name='lastName' id='lastName' placeholder="Last Name"/>
				</div>
                <div className="register__field">
					
					<input typeName="email" class="register__input" name='email' id='email' placeholder="Email"/>
				</div>
                <div className="register__field">
					
					<input typeName="text" class="register__input" name='city' id='city' placeholder="City"/>
				</div>
				
				<div className="register__field">
					
					<input typeName="password" class="register__input" name='password' id='password' placeholder="Password"/>
				</div>
                <div className="register__field">
					
					<input typeName="password" class="register__input" name='repass' id='repass' placeholder="Repeat Password"/>
				</div>
				<button className="button register__submit">
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