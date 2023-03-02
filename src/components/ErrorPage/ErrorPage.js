import React from "react";
import './ErrorPage.css'

const Error = ({message}) => {
return(
  <section>
    <h2 className="error-message"> 🛠️Something went Wrong! Try again later or return home! 🔧</h2>
    <p className="error-message"> { message} </p>
  </section>
  )
} 
export default Error;