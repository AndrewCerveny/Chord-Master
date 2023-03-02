import React from "react";
import pianoImg from '../../images/piano.png'
import './Piano.css'

const Piano = () => {
return(
  <section  className="piano-pro">
    <div className="piano-wrapper">
      <img className='piano-img'src={pianoImg} alt='piano display with labeled key'/>
    </div>
    <section className="progression">
      <div className="progress-card">
        <h2>Popular Progressions</h2>
          <h3>I-IV-V : 1-4-5 </h3>
          <h3>I-V-vi-IV : 1-5-6-4 </h3>
          <h3>ii-V-I : 2-5-1</h3>
      </div>
    </section>

  </section>
)
}
export default Piano; 