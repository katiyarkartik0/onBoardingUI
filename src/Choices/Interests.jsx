import React from 'react'
import './Interests.css'
import { useNavigate } from 'react-router-dom';

const Interests = () => {
    let navigate = useNavigate();

    return (

        <>
            <div class="pin_container">
                <div className="card card_small"><h4>Home décor</h4></div>
                <div className="card card_medium"><h4>DIY and Crafts</h4></div>
                <div className="card card_large"><h4>Entertainment</h4></div>
                <div className="card card_small"><h4>Engineering</h4></div>
                <div className="card card_medium"><h4>Medicine</h4></div>
                <div className="card card_large"><h4>Beauty</h4></div>
                <div className="card card_small"><h4>Humor</h4></div>
                <div className="card card_medium"><h4>Motivation</h4></div>
                <div className="card card_large"><h4>Coding</h4></div>
            </div>
            <div>
                <button
                    onClick={() => {
                        navigate('/');
                    }}
                    type="submit" className="btn btn-primary back">Back</button>

                <button

                    type="submit" className="btn btn-primary proceed">Proceed</button>
            </div>
        </>

    )
}

export default Interests
