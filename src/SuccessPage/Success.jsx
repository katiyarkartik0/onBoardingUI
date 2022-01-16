import React from 'react'
import './Success.css'
const Success = (props) => {
    console.log(props)
    return (
        <>
            <img className='bg' src="https://os-system.com/blog/wp-content/uploads/2020/12/design-with-rounded-corners.jpg" ></img>

            <div className='page'>

                <div className='greetings'>
                    <img src=''></img>
                    <img className='logo' src="https://careerninja.in/wp-content/uploads/2019/02/Logo-unit-_-white-BG-copy-1.png" ></img>
                    <div className='writings'>
                        <h1 className='text'>Welcome Onboard! </h1>
                        <p className='disc'>thanks for showing your interest in </p>
                        <div className='content'>
                        {props.interestArr.map((item, idx) => {
                            return <p className='disc'> {props.interestArr[idx]} </p>;
                        }
                        )}
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Success
