import React, { useState } from 'react'
import "../App.css"
function FormReact() {

const [email,setEmail] = useState(" ")
const [password,setPassword] = useState(" ")
const [gender,setGender] = useState("male")
const [checkBox,setCheckBox] = useState(false)

  const handleForm = (e)=>{
    e.preventDefault() 
  }

const submitForm = ()=>{
  console.log(email,password,gender,checkBox)
}

  return (
    <div className='main' >
      <h1 >hello from FormReact</h1>
   
      <form onSubmit={(e)=> handleForm(e)} >
        <label htmlFor="email" className='input1'>UserName</label>
        <br />
        <input type="text"  id="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='email' />
        <br />
          <label htmlFor="">Password</label>
        <br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)}  id="" placeholder='password' />
        <br />
        <select onChange={(e)=> setGender(e.target.value)} >
            <option value="">Select Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="neutral">Prefer not to say</option>
        </select>
        <br />
      
        <input type="checkbox" id='' onChange={(e)=> setCheckBox(e.target.checked)} />
          <label htmlFor="">Agree Your T&c</label>
          <br />
          <button onClick={submitForm} >Submit</button>
      </form>
    </div>
  )
}

export default FormReact
