
import './App.css';
import './components/login/Login.css';
import './components/register/Register.css';
import './components/create/Create.css';
import './components/catalog/Catalog.css';
import './components/details/Details.css';

import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { db, auth } from './firebase-config';
import {collection, getDocs, onSnapshot, doc} from 'firebase/firestore';

import { AuthProvider } from './components/services/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

import { Header} from './components/header/Header';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Create } from './components/create/Create';
import { Catalog } from './components/catalog/Catalog';
import { Edit } from './components/edit/Edit';
import { CarDetails } from './components/details/Details';







function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const [cars, setCars] = useState([]);
  const carsCollRef = collection(db, "cars");

  useEffect(() => {
  

    const getCars = async() => {
      const data = await getDocs(carsCollRef);
   
      setCars(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
    }
    getCars();
  }, []);

  const addCarHandler = (carData) => {
    setCars(state => [
      ...state,
      carData
    ])
  };


  
  return (
    <div className="App">
     
        <Header/>
      
      
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/register' element={<Register/>}> </Route>
        <Route path='/create' element={<Create cars={cars} addCarHandler={addCarHandler}/>}> </Route>
        <Route path='/catalog' element={<Catalog cars={cars} addCarHandler={addCarHandler}/>}> </Route>
        <Route path='/catalog/:carId' element={<CarDetails addCarHandler={addCarHandler}  cars={cars}/> }/>
        <Route path='edit/:carId' element={<Edit addCarHandler={addCarHandler} cars={cars} />} />
      </Routes>
     
      <Footer />
      
    </div>
  );
}

export default App;
