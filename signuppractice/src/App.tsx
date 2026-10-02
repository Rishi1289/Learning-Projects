import { Route, Routes } from 'react-router';
import './App.css'

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/home';

const App = () => {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
       
    </div>
  )
}

export default App
