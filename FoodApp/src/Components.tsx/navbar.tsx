import { Link } from "react-router-dom";
import {restaurants} from "../Data/Fooditems";
import { useState } from "react";


const navbar = () => {

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className='Navbar'>
     
      <div className="searchbar">
         <h2>FoodIt</h2>
         
         
          <input 
             type="text"
             placeholder="Search you Delights"
             value={searchTerm}
             onChange={(e)=>setSearchTerm(e.target.value )}/>

             <p>You typed: {searchTerm}</p>
          
         </div>
       <div className='Nav'>
        <Link to="/home">Home </Link>
        <Link to="/Restaurant">Restaurant </Link>
        <Link to="/Cart">Cart </Link>
        
        <div className="loginnav">
          <Link to="/Login">Logout </Link>
          
        </div>
       </div>
    </div>
  )
}

export default navbar
