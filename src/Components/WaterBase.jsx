import React from 'react'
import obd from '../Images/obd.jpg'
import intp from '../Images/int-pri.jpeg'
import extp from '../Images/ext-pri.jpeg'
import intemu from '../Images/int-emu.jpeg'
import extemu from '../Images/ext-emu.webp'
import dark from '../Images/dark-emu.webp'
import lustre from '../Images/lustre.png'
import gpsp from '../Images/gpsp.jpg'
const WaterBase = () => {
  return (
    <div>
      <h1>WATER BASE PRODUCTS</h1>
      <div class="card-con">
            <div class="card">
                <img id='tin' src={obd} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Oil Bond</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={intp} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Interior Primer</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={extp} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Exterior Primer</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={intemu} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Interior Emulsion</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={extemu} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Exterior Emulsion</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={dark} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Dark Shade Emulsion</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={lustre} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Water Lustre</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={gpsp} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Water Base Gold & Silver Paint</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            </div>
            
    </div>
    
  )
}

export default WaterBase
