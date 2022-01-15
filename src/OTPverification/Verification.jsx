import React from 'react'
import './Verification.css'
import { useState } from 'react'
const Verification = (props) => {
    console.log(props)
    let [otp, setOtp] = useState([]);
    console.log(otp);

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
                <div className='instruction'><h2>enter code sent to {props.user.number}</h2></div>
            </div>
        </>
    )
}

export default Verification
