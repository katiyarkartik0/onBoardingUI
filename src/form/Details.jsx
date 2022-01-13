import React from 'react'
import './Details.css'
import { useNavigate } from 'react-router-dom';

const Details = () => {
    let navigate = useNavigate();

    return (
        <>
            <div class="signupForm">
                <form className=''>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Number</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>                   
                    <button
                    onClick={() => {
                        navigate('/interests');
                    }}
                     type="submit" class="btn btn-primary">Proceed</button>
                </form>
            </div>
        </>
    )
}

export default Details
