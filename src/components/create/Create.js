import { createCarOffer } from "../services/CarServices";
import { useState, useContext } from "react";
import AuthContext from "../services/AuthContext";
import { useNavigate } from "react-router-dom";

 export const Create = ({addCarHandler}) => {

	const [carData, setCarData] = useState({});
	const handleInput = (e) => {
		let newInput = {[e.target.name] : e.target.value};
		setCarData({...carData, ...newInput});
	}

	const { user } = useContext(AuthContext);
	console.log(user.uid);
	const navigate = useNavigate();
	
	const createOffer = async (e) => {
		e.preventDefault();
		
		console.log(carData);
		try {
			await createCarOffer(carData, user.uid);
			
			addCarHandler(carData);
			navigate ('/catalog');
		} catch(err) {
			alert(err)
		}
		
		
	}
    return (
        <section className="createPage">
            <div className="create_container">
				<div className="screen">
					<div className="screen__content">
						<form class="create" onSubmit={createOffer}>
            				<div className="create__field">
								<label htmlFor="carModel" className='createLabel'>Car model:</label>
								<input type="text" 
								className="create__input" 
								name='carModel' 
								id='carModel'
								onChange={(e)=>(handleInput(e))}/>
							</div>
            				<div className="create__field">
							<label htmlFor="price" className='createLabel'>Price per day:</label>
								<input type="number" 
								className="create__input" 
								name='price' 
								id='price' 
								onChange={(e)=>(handleInput(e))}/>
							</div>
                			<div className="create__field">
							<label htmlFor="city" className='city'>City:</label>
								<input typeName="text"
								 class="create__input" 
								 name='city' 
								 id='city'
								 onChange={(e)=>(handleInput(e))}/>
							</div>
							<div className="create__field">
							<label htmlFor="imgUrl" className='createLabel'>Image URL:</label>
							<input type="text"
								className="create__input"
								name='imgUrl'
								id='imgUrl'
								onChange={(e)=>(handleInput(e))}/>
			    			</div>
							<div className="create__field">
							<label htmlFor="desc" className='createLabel'>Description:</label>
								<textarea  className="create__input"
								name='desc'
								id='desc' 
								onChange={(e)=>(handleInput(e))}/>
			    			</div>
				<button className="button create__submit">Create offer</button>				
			</form>
        
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

