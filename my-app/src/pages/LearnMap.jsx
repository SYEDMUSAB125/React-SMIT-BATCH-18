import React from 'react'

function LearnMap() {
    const cities = ["karachi","islamabad","lahore","punjab"]




  return (
    <div>
      <h1>hello from map</h1>
        {
            cities.map((city)=><h1>My city is {city}</h1> 
            )
        }
    </div>
  )
}

export default LearnMap
