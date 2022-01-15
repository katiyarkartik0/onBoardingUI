import React from 'react'
import './Verification.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Verification = (props) => {
    console.log(props)
    let [otp, setOtp] = useState([]);
    console.log(otp);
    let navigate = useNavigate();

    return (
        <>
            <div className='box'>
                <div className='container'>
                    <input
                        //value={otp}
                        onChange={(e) => {
                            setOtp(oldArr => [...oldArr, parseInt(e.target.value) <= 9 ? parseInt(e.target.value) : otp[otp.length - 1]]);
                        }}
                        className="void card_small"></input>
                    <input
                        onChange={(e) => {
                            setOtp(oldArr => [...oldArr, parseInt(e.target.value) <= 9 ? parseInt(e.target.value) : otp[otp.length - 1]]);
                        }}
                        className="void card_small"></input>
                    <input
                        onChange={(e) => {
                            setOtp(oldArr => [...oldArr, parseInt(e.target.value) <= 9 ? parseInt(e.target.value) : otp[otp.length - 1]]);
                        }}
                        className="void card_small"></input>
                    <input
                        onChange={(e) => {
                            setOtp(oldArr => [...oldArr, parseInt(e.target.value) <= 9 ? parseInt(e.target.value) : otp[otp.length - 1]]);
                        }}
                        className="void card_small"></input>
                    <input
                        onChange={(e) => {
                            setOtp(oldArr => [...oldArr, parseInt(e.target.value) <= 9 ? parseInt(e.target.value) : otp[otp.length - 1]]);
                        }}
                        className="void card_small"></input>
                    <input
                        onChange={(e) => {
                            setOtp(oldArr => [...oldArr, parseInt(e.target.value) <= 9 ? parseInt(e.target.value) : otp[otp.length - 1]]);
                        }}
                        className="void card_small"></input>

                </div>
                <div className='instruction_otp'><h2>OTP verification</h2></div>

                <div className='instruction'><h4>enter code sent to {props.user.number}</h4></div>
                <button
                  onClick={()=>{
                    navigate('/interests');
                }}
                    type="submit" className="btn btn-primary back_v">Back</button>
                <button
                  onClick={()=>{
                    navigate('/interests');
                }}
                    type="submit" className="btn btn-primary proceed_v">Proceed</button>
            </div>
        </>
    )
}

export default Verification
