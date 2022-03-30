import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Jane'} lastName={'Doe'} age={25} hairColor={'Black'} />
      <PersonCard firstName={'John'} lastName={'Smith'} age={38} hairColor={'Brown'} />
      <PersonCard firstName={'Millard'} lastName={'Fillmore'} age={45} hairColor={'Brown'} />
      <PersonCard firstName={'Maria'} lastName={'Smith'} age={52} hairColor={'Brown'} />
    </div>
  );
}

export default App;
