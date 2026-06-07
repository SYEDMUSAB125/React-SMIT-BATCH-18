import React, { useState } from 'react'

const ConditionalRendering3 = () => {
const [val, setVal] = useState()
const [vote , setVote] = useState(false)

    const getInput = (e)=>{
      setVal(e.target.value)
       setVote(false)
    }
    const showRes = ()=>{
      setVote(true)
    }
    const hideRes = ()=>{
      setVal("")
    }

  return (
    <div>
      <h1> {vote ? val : " "  } </h1>
      <input type="text" placeholder='Enter Vlaue' onChange={getInput} />
      <button onClick={showRes} >Show me</button>
      <button onClick={hideRes} >hide me</button>
    </div>
  )
}

export default ConditionalRendering3
