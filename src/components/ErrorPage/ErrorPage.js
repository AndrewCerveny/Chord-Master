import React from "react";
import './ErrorPage.css'

const Error = ({message}) => {
return(
  <section className="error-view">
    <h2 className="error-message err"> 🛠️Something went Wrong! Try again later or return home! 🔧</h2>
    <p className="error-message1"> { message} </p>
  </section>
  )
} 
export default Error;