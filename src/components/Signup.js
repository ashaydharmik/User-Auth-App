import React, { useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import { useUserAuth } from '../context/UserAuthContext'
import { Alert } from 'react-bootstrap'


const Signup = () => {
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const {signUp} = useUserAuth();
const[error,setError]=useState("")
const navigate = useNavigate()




const handleSubmit= async(e)=>{
e.preventDefault();
setError("")
try{
  await signUp(email,password)
  navigate("/")
}
catch(err){
setError(err.message)
}
}
  return (
    <>
    <section className="container">
      <div className="sectionOne">
        <div className="element">
          <h1>Board.</h1>
        </div>
      </div>
      <div className="sectionTwo">
      <div className="centered">
  
        <h1>Sign Up</h1>
        {error && <Alert variant='danger'>{error}</Alert>}
        <p>Sign up to your account</p>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">Email address</label>
          <input id="email" type="text" autoComplete="false" required 
          onChange={(e)=> setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required 
          onChange={(e)=> setPassword(e.target.value)}/>
          
          <button>Sign Up</button>
        </form>
        <div className="center">
          <p>
  
          Already have an account? &nbsp;
          <span className="line">
          <Link to="/">Login</Link>
          </span>
          </p>
        </div>
      </div>
      </div>
    </section>
  </>
  )
}

export default Signup
