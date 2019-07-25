import React from 'react';
import logo from './logo.svg';
import './App.css';

//Componentes personalizados
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
        <Navigation title="Mi primera Navegación"/>
        <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
