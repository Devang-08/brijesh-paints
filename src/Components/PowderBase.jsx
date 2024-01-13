import React from 'react'
import cement from '../Images/cement.png'
import wall from '../Images/wall.webp'
const PowderBase = () => {
  return (
    <div>
      <h1>POWDER BASE PRODUCTS</h1>
      <div class="powder">
      <div class="card">
                <img id='tin' src={cement} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Cement Paint</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={wall} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Wall Putty</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default PowderBase
