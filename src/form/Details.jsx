import React from 'react'
import './Details.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Progress from '../ProgressBar/Progress';

const Details = (props) => {
    let navigate = useNavigate();
    let [displayName, setDisplayName] = useState("");
    let [email, setEmail] = useState("");
    let [number, setNumber] = useState("");
    let userData = {displayName,email,number};
    console.log(userData);
    console.log(Object.keys(userData).length);
    console.log(props);
    return (
        <>
        <div className='intro'>
            <img className='logo1' src='https://careerninja.in/wp-content/uploads/2019/02/Logo-unit-_-white-BG-copy-1.png'></img>
        </div>

            <div className="signupForm">

                <form className=''>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={displayName}
                            onChange={(e)=>{
                                setDisplayName(e.target.value);
                            }}
                         />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Number</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={number}
                            onChange={(e)=>{
                                setNumber(e.target.value);
                            }}
                         />
                    </div>                   
                    <button
                    onClick={() => {
                        props.triggerDetails(userData)
                        if(userData.displayName.length!==0 && userData.number.length!==0){
                            navigate('/interests');
                        }
                        else{
                            alert("please enter your complete data to proceed")
                        }
                        props.pageNo(1)
                    }}
                     type="submit" className="btn btn-primary">Proceed</button>
                </form>
            </div>
        </>
    )
}
export default Details