import React, { memo } from 'react'

function ExampleRender(props) {
    console.log("hello from example components multi", props.multi)
  return (
    <div>
      <h1>Multi: {props.multi}</h1>
    </div>
  )
}

export default memo(ExampleRender)
