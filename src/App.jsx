import './App.css';
import Login from './Components/Login/Login';
import {Routes, Route } from 'react-router-dom';
import Receta from './Components/Receta/Receta';

function App() {
  return <>

    <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/receta" element={<Receta />} />
    </Routes>
  
  </>

}

export default App;

