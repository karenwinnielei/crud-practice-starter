import React, { useState, useEffect } from 'react';

import AnimalForm from './AnimalForm.js';
import AnimalList from './AnimalsList.js';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

export default function AnimalDashboard() {
  const [animals, setAnimals] = useState([]);
  const [update, setUpdate] = useState(false);

  // How can get fetch the data from the server when the component mounts?
  // How can we capture and set that data to state?
  useEffect(() => {
    axiosWithAuth()
      .get('animals')
      .then((res) => {
        console.log(res);
        setAnimals(res.data);
        setUpdate(false);
      })
      .catch((err) => console.log(`There is an error: ${err}`));
  }, [update]);

  return (
    <div className='dash'>
      <AnimalForm animals={animals} updateAnimals={setAnimals} />
      <AnimalList animals={animals} />
    </div>
  );
}
