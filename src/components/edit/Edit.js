import { editCar, getCarById } from "../services/CarServices";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from '../../firebase-config';

 export const Edit = ({addCarHandler}) => {
   
    const navigate = useNavigate();
    const {carId} = useParams();
    console.log(carId);

	const [currentCar, setCurrentCar] = useState({});
    

    useEffect(() => {
        const car = async () => {
            try {
                const data = await getCarById(carId);
                console.log(data)
                setCurrentCar(data);
             } catch(err) {
                alert(err);
             }
        }
        car()  
        
    }, []);

   console.log(currentCar);
   
	
	const onSubmit = async (e) => {
        e.preventDefault();

        const newCar = Object.fromEntries(new FormData(e.target));
        console.log(newCar);
		const addData = {
			carModel: newCar.carModel,
			price: newCar.price,
			city: newCar.city,
			imgUrl: newCar.imgUrl,
			desc: newCar.desc,
			 created: Timestamp.now()
		};
    		try {
				const carRef = doc(db, "cars", carId);
				
				const result = await updateDoc(carRef, addData );
					console.log(result);
					
					alert("Success");

    		} catch (err) {
        		alert(err);
    		}
            addCarHandler(addData);
            navigate('/catalog');
        
	}
    return (
        <section className="createPage">
            <div className="create_container">
				<div className="screen">
					<div className="screen__content">
						<form class="create" onSubmit={onSubmit}>
            				<div className="create__field">
								<label htmlFor="carModel" className='createLabel'>Car model:</label>
								<input type="text" 
								className="create__input" 
								name='carModel' 
								id='carModel'
								defaultValue={currentCar.carModel}/>
							</div>
            				<div className="create__field">
							<label htmlFor="price" className='createLabel'>Price per day:</label>
								<input type="number" 
								className="create__input" 
								name='price' 
								id='price' 
								defaultValue={currentCar.price}/>
							</div>
                			<div className="create__field">
							<label htmlFor="city" className='city'>City:</label>
								<input typeName="text"
								 class="create__input" 
								 name='city' 
								 id='city'
								 defaultValue={currentCar.city}/>
							</div>
							<div className="create__field">
							<label htmlFor="imgUrl" className='createLabel'>Image URL:</label>
							<input type="text"
								className="create__input"
								name='imgUrl'
								id='imgUrl'
								defaultValue={currentCar.imgUrl}/>
			    			</div>
							<div className="create__field">
							<label htmlFor="desc" className='createLabel'>Description:</label>
								<textarea  className="create__input"
								name='desc'
								id='desc' 
								defaultValue={currentCar.desc}/>
			    			</div>
				<button className="button create__submit">Update offer</button>				
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