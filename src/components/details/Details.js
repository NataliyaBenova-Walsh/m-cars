
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getCarById } from '../services/CarServices';
import { auth, db } from '../../firebase-config';
import { getUserById, getUserByUid } from '../services/UserServices';
import { getDoc, doc, collection, query, where, getDocs } from 'firebase/firestore';



export const CarDetails = ({ car}) => {
    const [ user, error] = useAuthState(auth);
    const { carId } = useParams();
    let isOwner;
    console.log(carId);
    const [currentCar, setCurrentCar] = useState({});

    useEffect(() => {
        const car = async () => {
            try {
                const data = await getCarById(carId);
                console.log(data);
            
                setCurrentCar(data);
             } catch(err) {
                alert(err);
             }
        }
        car()  
        
    }, [carId]);

   
    let owner = {};
    console.log(`User: ${user.uid}`);
    console.log(`Owner: ${currentCar.ownerId}`);
    

    const getOwner = async (e) => {
            e.preventDefault();
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("uid", "==", currentCar.ownerId));
            try {     const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc)=> {
                     owner = doc.data();
                    console.log(owner);
                    console.log(doc.id, "-", doc.data());
                    return owner;
                })
          
                
                } catch(err) {
                    alert(err)
                }
           
        
    
        
    }

    if(user.uid==currentCar.ownerId) {
         isOwner = true;
    }
    
   
   /* const getOwner = async(e) => {
        e.preveventDefault();
        
        
    };*/
    
    
        
    

    return (
        <>
             <div className='details-container'>
                <div className="details-car-container">
                    <p><img src={currentCar.imgUrl} width="300" height="150" alt="" /></p>
			        <h2 className='car-model'>Model: {currentCar.carModel}</h2>
			        <h3 className='car-price'>Price from: {currentCar.price} </h3>
                    <h4 className='car-location'>Location: {currentCar.city}</h4>
                    <p className='car-desc'>Description: {currentCar.desc}</p>
			
            {isOwner 
                ? <div className="details-links">
                    <Link className='details-link' to={`/edit/${carId}`}>Edit</Link>
                    <Link className='details-link' to={`/delete/${carId}`}>Delete</Link>
                </div>

                : <div className='details-car-container owner-container'>
                    <h2 className='owner-title'>Owner details</h2>
                    <p className='owner-p'>Here are the owner details feel free to send an enquire for updated prices and availability</p>
            
                    <div className="contacts-owner">
				        <div className='owner-card'>
                            <h3 className='owner-name'>Name: </h3>
                            <h3 className='owner-email'>Email: </h3>
                            <a href={`mailto:${owner.email}`}>Email me</a>
                            <button onClick={getOwner}>Get owner</button>
                        </div>
                    </div>
                    </div>
            }
			
		    </div>
        
        </div>
        </>
    );
}