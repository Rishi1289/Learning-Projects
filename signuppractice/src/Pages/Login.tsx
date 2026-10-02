import { Link } from "react-router";
import Signup from "./Signup";
import { useState } from "react";

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const submithandeler=(e)=>{
    e.preventDefault();
    console.log('Email is',email)
    console.log('password is',password)
  }
  return (
    <div className="LoginPage">
       <div className="loginbox">
        <form onSubmit={submithandeler}>
        <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter Your Email" />
        <input value={password} onChange={(e)=>{setpassword(e.target.value)}}type="text" placeholder="Enter Your Password"/>
        <button>Smash to login</button>
        <p>Dont have an account ?</p>
        <Link to ='/Signup'>Signup</Link>
       </form>
       </div>
    </div>
  )
}

export default Login
