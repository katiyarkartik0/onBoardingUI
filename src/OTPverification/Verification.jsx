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
        <div className='page' >
            <img className='image' src="https://scontent.fdel45-1.fna.fbcdn.net/v/t1.6435-9/197153712_4239852796064665_3190510697905546615_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=MrjpcuLA3bMAX-wDBOA&_nc_ht=scontent.fdel45-1.fna&oh=00_AT_I1y1jMFueGF_HE6YHV38adHXrXjfbiEqRM3p86vA7Cg&oe=620A1B45" ></img>
            <div className='box'>
            <img className='logo' src="https://careerninja.in/wp-content/uploads/2019/02/Logo-unit-_-white-BG-copy-1.png" ></img>

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
            </div>
        </>
    )
}

export default Verification
