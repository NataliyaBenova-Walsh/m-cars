import React, { useState } from 'react';

import Parse from 'parse/dist/parse.min.js';

const getAllCars = () => {
    return fetch('https://mcars.b4a.io/classes/Car')
    .then(res => res.json());
}

const fetchAllCars = (async () => {
  const Car = Parse.Object.extend('Car');
  const query = new Parse.Query(Car);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const cars = await query.find();
    for (const car of cars) {
      // Access the Parse Object attributes using the .GET method
      const carModel = car.get('carModel')
      const price = car.get('price')
      const location = car.get('location')
      const imgUrl = car.get('imgUrl')
      const desc = car.get('desc')
      
    }
  } catch (error) {
    console.error('Error while fetching Car', error);
  }
})();

      

export {
    getAllCars,
    fetchAllCars
}