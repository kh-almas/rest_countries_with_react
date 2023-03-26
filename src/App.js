import './App.css';
import React from 'react';
import Countries from "./component/countries/getCountries/Countries";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countries></Countries>
      </header>
    </div>
  );
}

export default App;
