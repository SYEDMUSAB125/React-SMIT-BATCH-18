import React, { memo, useCallback } from 'react'
import style from "./navbar.module.css"
function Navbar(props) {
 console.log("hello from navbar")
  return (
    <div>
      <h1 className={style.head} >adder: {props.count} </h1>
    </div>
  )
}

export default memo(Navbar)
