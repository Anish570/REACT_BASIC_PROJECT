import React from 'react'
import notfoundimg from "../assets/Contact.png"
const NotFound = ({className}) => {
    
  return (
    <div className={className}>
        <img src={notfoundimg} alt="" srcset="" width={70} />
        <h3 >Contact Not Found</h3>
    </div>
  )
}

export default NotFound