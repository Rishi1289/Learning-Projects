import { useState } from "react";
import { Link } from "react-router";


const Signup = () => {
  const handel = (e) =>{
    e.preventDefault ();

    const getdata = JSON.parse(localStorage.getItem("user") || "[]");
    let arr = [];
    arr = [...getdata];
    arr.push(Userdata);


    localStorage.setItem("user",JSON.stringify(arr))
  }

  const userDetails = {
    name:"",
    email:"",
    password:""
  }

  const [Userdata, setUserdata] = useState(userDetails)

  const submithandeler=(e)=>{
    console.log(e.target.value)
    console.log(e.target.name)
    const name = e.target.name;
    const value =e.target.value;

    setUserdata({...Userdata,[name]:value})
  }
   console.log(Userdata)
    
  return (
    <div className="SignupPage">
        
      <div className="signupbox">
        <form onSubmit={handel} >
        <input type="text" name="name" placeholder="Enter your name"  onChange={submithandeler}/>
        <input type="email" name="email" placeholder="Enter your email" onChange={submithandeler}/>
        <input type="password" name="password" placeholder="Enter your Password" onChange={submithandeler}/>
        
        <button>Create an account</button>
        <p>Have an Account ?</p>
        <Link to= '/'>Login</Link>
        </form>
      </div>



      
    </div>
  )
}

export default Signup
