import React, { useState } from "react"
import TopicProps from "./pages/TopicProps"
import OwnTopic from "./pages/OwnTopic"

import ConditionalRendering3 from "./pages/ConditionalRendering3"
import FunctionProps from "./pages/FunctionProps"
import  FormReact  from "./pages/FormReact"
const App = ()=>{
  
const [name , setName] =useState("Syed Musab")
  
  return(
    <>
      <h1>Hello react is starting</h1>
    < FormReact />
   
    </>
  )
}
export default App