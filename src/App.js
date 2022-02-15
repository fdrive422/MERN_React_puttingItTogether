import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      {personArray.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
    </div>
  );
}

const personArray = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 45,
    hairColor: 'Black',
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 88,
    hairColor: 'Brown',
  },
  {
    firstName: 'Millard',
    lastName: 'Fillmore',
    age: 50,
    hairColor: 'Brown',
  },
  {
    firstName: 'Maria',
    lastName: 'Smith',
    age: 62,
    hairColor: 'Brown',
  },
];

export default App;
