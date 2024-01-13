import React from 'react'
import map from '../Images/map.png'

const Contact = () => {
    return (
        <div className='d-flex justify-content-between'>
            <img id='imap' src={map} alt="" />
        <div className='bg-dark text-light contact-con 'id='form'>
            <form >
                <div >
                    <label for="validationDefault01" class="form-label">Name</label>
                    <input type="text" class="form-control" id="validationDefault01" value="" required />
                </div>
                <div >
                    <label for="validationDefault02" class="form-label">Email ID</label>
                    <input type="email" class="form-control" id="validationDefault02" value="" required />
                </div>
                <div >
                    <label for="validationDefaultUsername" class="form-label">Mobile No</label>
                    <input type="number" class="form-control" id="validationDefault02" value="" required />

                </div>
                <div >
                    <label for="validationDefault03" class="form-label">Address</label>
                    <input type="text" class="form-control" id="validationDefault02" value="" required />

                </div>
                <div >
                    <label for="validationDefault04" class="form-label">Write a Message for us :)</label>
                    <input type="text" class="form-control" id="validationDefault02" value="" required />

                </div>
                   <button id='conbtn'>Submit</button>
            </form>
        </div>
        </div>
        
    )
}

export default Contact