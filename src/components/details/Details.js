
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { delCar, getCarById } from '../services/CarServices';
import { auth, db } from '../../firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { collection, query, where, getDocs } from 'firebase/firestore';



export const CarDetails = ({addCarHandler}) => {


    
    const navigate = useNavigate();
    const [ user, error] = useAuthState(auth);
    const { carId } = useParams();

    const [currentCar, setCurrentCar] = useState({});
    const [contactOwner, setContactOwner] = useState(false);

    let isOwner;

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
 

    const getOwner = async (e) => {
            e.preventDefault();
            setContactOwner(true);

            const usersRef = collection(db, "users");
            const q = query(usersRef, where("uid", "==", currentCar.ownerId));
              try {
                const querySnapshot = await getDocs(q);
                
                querySnapshot.forEach((doc)=> {
                  const ownerData = doc.data();
                 
                    console.log(doc.id, "-", doc.data());
                    console.log(ownerData);
                    setCarOwner(ownerData);
                });
          
                
                } catch(err) {
                    alert(err)
                }
          
               
    }
 

    if(user.uid==currentCar.ownerId) {
         isOwner = true;
    }
    
    const onBack = () => {
        navigate('/catalog');
    }
   const onDelete =async (e) => {
    e.preventDefault();
    try {
        await delCar(carId);
        console.log("Deleted successfully");
        
        navigate('/catalog');
    } catch(err) {
        alert(err);
    }
   
   }
    

    return (
        <section id='details-section'>
        <button className='btn-back' onClick={onBack}><FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon-details'/></button>
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

                : <div className='details-owner-container'>
                    <h2 className='owner-title'>Owner details</h2>
                    
            
                    <div className="contacts-owner">
				        <div className='owner-card'>
                        
                            {contactOwner
                            ? <div className='owner-box'>
                                <div className='owner-name'>
                                    <p><FontAwesomeIcon icon={faUser} className='icon-owner'/>
                                        <span >  {carOwner.firstName} {carOwner.lastName} </span></p>
                                    </div>
                                <div className='owner-email'>
                                    <p><FontAwesomeIcon icon={faEnvelope} className='icon-owner'/>
                                        <span >
                                            <a href={`mailto: ${carOwner.email} `}>
                                                {carOwner.email}</a> 
                                                </span></p>
                                </div>
                                
                            
                            </div>
                            : <div>
                                <p className='owner-p'>Feel free to enquire updated prices and availability</p>
                            <button className='button get-owner-btn' onClick={getOwner}>Contact the owner </button>
                            </div>
                            }
                            
                         
                        
                            
                            
                            
                        </div>
                    </div>
                    </div>
            }
			
		        </div>
        
        </div>
        </section>
    );
}