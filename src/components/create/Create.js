import {db} from '../../firebase-config';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

 export const Create = ({addCarHandler}) => {
	const createOffer = async (e) => {
		e.preventDefault();
		const carData = Object.fromEntries(new FormData(e.target));
		console.log(carData);
		try {
			await addDoc(collection(db, 'cars'), {...carData, created: Timestamp.now()});
			
		} catch(err) {
			alert(err)
		}
		
		addCarHandler(carData);
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
								id='carModel'/>
							</div>
            				<div className="create__field">
							<label htmlFor="price" className='createLabel'>Price per day:</label>
								<input type="number" 
								className="create__input" 
								name='price' 
								id='price' />
							</div>
                			<div className="create__field">
							<label htmlFor="city" className='city'>City:</label>
								<input typeName="text"
								 class="create__input" 
								 name='city' 
								 id='city'
								  />
							</div>
							<div className="create__field">
							<label htmlFor="imgUrl" className='createLabel'>Image URL:</label>
							<input type="text"
								className="create__input"
								name='imgUrl'
								id='imgUrl'
								/>
			    			</div>
							<div className="create__field">
							<label htmlFor="desc" className='createLabel'>Description:</label>
								<textarea  className="create__input"
								name='desc'
								id='desc' 
								/>
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

