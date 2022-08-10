
import './App.css';
import './components/login/Login.css';
import './components/register/Register.css';
import './components/create/Create.css';
import { Routes, Route } from 'react-router-dom'




import { Header} from './components/header/Header';
import { Home } from './components/home/Home';

import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Create } from './components/create/Create';
import { Catalog } from './components/catalog/Catalog';
import { useEffect, useState } from 'react';

import { db } from './firebase-config';
import {collection, getDocs} from 'firebase/firestore'





function App() {
  const [users, setUsers] = useState([]);
  const usersCollRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollRef);
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
    }
    getUsers();
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/register' element={<Register/>}> </Route>
        <Route path='/create' element={<Create/>}> </Route>
        <Route path='/catalog' element={<Catalog/>}> </Route>
      
      </Routes>
     
     
    </div>
  );
}

export default App;
