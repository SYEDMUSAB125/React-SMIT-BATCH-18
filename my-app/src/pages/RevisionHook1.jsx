import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import Navbar from '../components/navbar/Navbar'

function RevisionHook1() {
      const [count,SetCount] = useState(0)
      const [add, setAdd] = useState(0)
 const showValue = ()=>{
    console.log("hello show value")
 }
  return (
    <div>
      <h1>hello we are in revision class</h1>
      <h1>Counter:{count}</h1>
      <Navbar count={add}  />
       <button onClick={()=>SetCount(count+1)} > increment </button>
       <button onClick={()=>setAdd(add+1)} > adder </button>
     
    </div>
  )
}

export default RevisionHook1
