import React, { useMemo, useState } from 'react'
import "../App.css"
import Navbar from '../components/navbar/Navbar'
const LearnMemo = () => {
    const [count, setCount ] = useState(0)
    const [age , setAge] = useState(0)

    const add = useMemo(()=>{
          console.log("i am working")
        return count * 10
      
    },[count])

  return (
    <div>
      < Navbar />
      <h1 className='head'  >Count: {count}</h1>
      <h1>Addition in counter : {add}</h1>
      <h2 style={{backgroundColor:"red" , color:"rgb(41, 230, 214)"}} >Age : {age}</h2>
      <button onClick={()=> setCount(count+1)} > increment </button>
      <button onClick={()=> setAge(age+1)} > age </button>
    </div>
  )
}

export default LearnMemo
