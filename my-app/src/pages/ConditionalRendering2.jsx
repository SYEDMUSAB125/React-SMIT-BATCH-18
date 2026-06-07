import React, { useState } from 'react'

export default function ConditionalRendering2() {

    // logic gates && || !

     const [vote, setVote ] = useState(false)
     const [val,setVal] = useState(null)

     const getVal = (e)=>{
        setVal(e.target.value)
        setVote(false)
     }
     
       const showRes = ()=>{
        setVote(true)
     }
  return (
    <div>
        <h1>{vote && val}</h1>
        <input type="text" placeholder='Enter Email' onChange={getVal} />
        <button onClick={showRes} >Show Value</button>
    </div>
  )
}
