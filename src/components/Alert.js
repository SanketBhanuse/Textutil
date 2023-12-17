import React from 'react'
import '../App.css'
const Alert = (props) => {
  return (
   props.alert && <div>
       <div class={`alert alert-${props.alert.type} `} role="alert"> 
        {props.alert.msg}
        </div>
    </div>
  )
}

export default Alert