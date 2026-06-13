import React, { useState } from "react"
import TopicProps from "./pages/TopicProps"
import OwnTopic from "./pages/OwnTopic"

import ConditionalRendering3 from "./pages/ConditionalRendering3"
import FunctionProps from "./pages/FunctionProps"
import  FormReact  from "./pages/FormReact"
import FormReact2 from "./pages/FormReact2"
const App = ()=>{
  
const [name , setName] =useState("Syed Musab")
  
  return(
    <>
 
   < FormReact2 />
   
    </>
  )
}
export default App