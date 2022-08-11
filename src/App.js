
import './App.css';
import './components/login/Login.css';
import './components/register/Register.css';
import './components/create/Create.css';
import './components/catalog/Catalog.css';
import { Routes, Route } from 'react-router-dom'


import { Header} from './components/header/Header';
import { Home } from './components/home/Home';

import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Create } from './components/create/Create';
import { Catalog } from './components/catalog/Catalog';
import { useEffect, useState } from 'react';
import { CarDetails } from './components/details/Details'

import { db } from './firebase-config';
import {collection, getDocs} from 'firebase/firestore'





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
      <header className="App-header">
        <Header/>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/register' element={<Register/>}> </Route>
        <Route path='/create' element={<Create addCarHandler={addCarHandler}/>}> </Route>
        <Route path='/catalog' element={<Catalog cars={cars}/>}> </Route>
        <Route path='/catalog/:carId' element={<CarDetails/>} />
      </Routes>
     
     
    </div>
  );
}

export default App;
