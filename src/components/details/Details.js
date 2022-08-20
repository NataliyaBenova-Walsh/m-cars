
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { delCar, getCarById } from '../services/CarServices';
import { auth, db } from '../../firebase-config';
import {getUserByUid} from '../services/UserServices';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';



export const CarDetails = ({ car}) => {


    
    const navigate = useNavigate();
    const [ user, error] = useAuthState(auth);
    const { carId } = useParams();
    let isOwner;

   let ownerObj;

    console.log("Car id: ", carId);
    const [currentCar, setCurrentCar] = useState({});
    const [contactOwner, setContactOwner] = useState(false);
    useEffect(() => {
        const car = async () => {
            try {
                const data = await getCarById(carId);
                setCurrentCar(data);
             } catch(err) {
                alert(err);
             }
        }
        car()  
        
    }, []);
  
    
   
    console.log(`User uid: ${user.uid}`);
    console.log("Owner uid: ", currentCar.ownerId);
    
    const [carOwner, setCarOwner] = useState({});
    /*useEffect(()=> {
        const owner = async() => {
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("uid", "==", currentCar.ownerId));
              try {
                const querySnapshot = await getDocs(q);
                
                querySnapshot.forEach((doc)=> {
                 
                    console.log(doc.id, "-", doc.data());
                    
                    setCarOwner(doc.data());
                });
          
                
                } catch(err) {
                    alert(err)
                }
        }
        owner();
      
    }, []);*/

console.log("from useefect: ", carOwner);

    const getOwner = async (e) => {
            e.preventDefault();
            setContactOwner(true);
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("uid", "==", currentCar.ownerId));
              try {
                const querySnapshot = await getDocs(q);
                
                querySnapshot.forEach((doc)=> {
                  ownerObj = doc.data();
                 
                    console.log(doc.id, "-", doc.data());
                    console.log(ownerObj);
                    setCarOwner(ownerObj);
                });
          
                
                } catch(err) {
                    alert(err)
                }
          
             
               
    }
 

    if(user.uid==currentCar.ownerId) {
         isOwner = true;
    }
    
   const onDelete =async (e) => {
    e.preventDefault();
    try {
        delCar(carId);
        console.log("Deleted successfully");
        
        navigate('/catalog');
    } catch(err) {
        alert(err);
    }
   
   }
    

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
                    <Link className='button edit-link' to={`/edit/${carId}`}>Edit</Link>
                   
                    <button className ="button delete-btn"onClick={onDelete}>Delete</button>
   
                </div>

                : <div className='details-car-container owner-container'>
                    <h2 className='owner-title'>Owner details</h2>
                    <p className='owner-p'>Here are the owner details feel free to send an enquire for updated prices and availability</p>
            
                    <div className="contacts-owner">
				        <div className='owner-card'>
                            <button onClick={getOwner}>Contact the owner </button>
                            {contactOwner
                            ? <div>
                                <h3 className='owner-name'>Name: <span>  {carOwner.firstName} {carOwner.lastName} </span></h3>
                                <h3 className='owner-email'>Email: <span> {carOwner.email} </span></h3>
                                <a href={`mailto: ${carOwner.email} `}>Email {carOwner.firstName} directly</a>
                            </div>
                            : <></>
                            }
                            
                         
                        
                            
                            
                            
                        </div>
                    </div>
                    </div>
            }
			
		        </div>
        
        </div>
        </>
    );
}