
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'


export const Login = () => {
    return (
        <section className="loginPage">
            <div className="login_container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" name='email' id='email' placeholder="Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input typeName="password" class="login__input" name='password' id='password' placeholder="Password"/>
				</div>
				<button className="button login__submit">
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