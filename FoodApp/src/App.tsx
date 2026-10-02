
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';

import Restaurant from './pages/RestaurantDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Home from './Home/Home';
import Layout from './pages/Layout';

function App() {
 

  return (
   <div className='App'>
     
       <div>
        
         <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>

            {/* Wraping outlet on the pages that need header and Footer */}

            <Route path='/' element={<Layout/>}>
             <Route path='/Home' element={<Home/>}/>
             <Route path='/Restaurant' element={<Restaurant/>}/>
             <Route path='/Cart' element={<Cart/>}/>
             {/* * means any undifined route will move the site to 404 not found */}
             <Route path='*' element={<NotFound/>}/> 
            </Route> 


          </Routes>
       </div>
       
   </div>
  )
}

export default App
