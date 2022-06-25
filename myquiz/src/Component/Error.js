import React from 'react'
import "./Error.css"
 function Error({children}) {
  return (
    <div className='error'>
      {children}
    </div>
  )
}
export default Error;
