import React from 'react'
import brush from '../Images/brush.jpeg'
import roller from '../Images/roller.jpeg'
import patra from '../Images/patra.jpeg'
import polish from '../Images/polish.jpeg'
import abro from '../Images/abro.jpeg'
const Accessories = () => {
  return (
    <div>
      <h1>ACCESSORIES</h1>
      <div class="accs">
      <div class="card">
                <img id='tin' src={brush} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">All Types of Brushes</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={roller} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">All Types of Rollers</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={patra} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">All Types of Palti Patra</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={polish} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Polish Papers</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={abro} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Abro Tape</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Accessories
