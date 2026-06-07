import React from 'react'
import "../App.css"
const FunctionProps = (props) => {

  return (
    <>
    <h1 className="head" >Hello { props.myname}</h1>
    <button onClick={()=> props.updateName("Billal")} >update name</button>
    </>
  )
}

export default FunctionProps
