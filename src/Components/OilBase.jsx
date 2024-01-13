import React from 'react'
import tin from '../Images/Tin.jpeg'
import red from '../Images/redoxide.jpeg'
import sprey from '../Images/sprey.jpg'
import unipri from '../Images/uni-primer.jpeg'
import blcjp from '../Images/blackjapan.jpeg'
import gold from '../Images/gold.jpeg'
import silver from '../Images/silver.jpeg'
import blcbd from '../Images/black-board.jpeg'
const OilBase = () => {

    return (
        <div>
            <h1>OIL BASE PRODUCTS</h1>
            <div class="card-con">
            <div class="card">
                <img id='tin' src={tin} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Synthetic Enamel</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={red} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Glossy Red Oxide</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={unipri} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Universal Primer</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={blcjp} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Glossy Black Japan</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={gold} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Aluminium Paint</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={silver} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Golden Paint</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={blcbd} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Black Board Paint</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            <div class="card">
                <img id='tin' src={sprey} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Sprey Paint</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default OilBase
