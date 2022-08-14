
import './App.css';
import './components/login/Login.css';
import './components/register/Register.css';
import './components/create/Create.css';
import './components/catalog/Catalog.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import {collection, getDocs} from 'firebase/firestore'

import { Header} from './components/header/Header';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Create } from './components/create/Create';
import { Catalog } from './components/catalog/Catalog';

import { CarDetails } from './components/details/Details'







function App() {
  const [cars, setCars] = useState([]);
  const carsCollRef = collection(db, "cars");

  useEffect(() => {
    const getCars = async () => {
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
        <Route path='/create' element={<Create addCarHandler={addCarHandler}/>}> </Route>
        <Route path='/catalog' element={<Catalog cars={cars}/>}> </Route>
        <Route path='/catalog/:carId' element={<CarDetails/>} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
