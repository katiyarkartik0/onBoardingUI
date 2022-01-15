import React from 'react'
import './Interests.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Interests = (props) => {
    let navigate = useNavigate();
    console.log(props.user.displayName);
    let [interestArr, setInterestArr] = useState([]);
    console.log(interestArr);
    return (
        <>
            <div class="pin_container">
                <div className={interestArr.includes('Home décor') ? "card card_small_2" : "card card_small"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Home décor'])}
                ><h4>Home décor</h4></div>
                <div className={interestArr.includes('DIY and Crafts') ? "card card_medium_2" : "card card_medium"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'DIY and Crafts'])}
                ><h4>DIY and Crafts</h4></div>
                <div className={interestArr.includes('Entertainment') ? "card card_large_2" : "card card_large"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Entertainment'])}
                ><h4>Entertainment</h4></div>
                <div className={interestArr.includes('Engineering') ? "card card_small_2" : "card card_small"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Engineering'])}
                ><h4>Engineering</h4></div>
                <div className={interestArr.includes('Medicine') ? "card card_medium_2" : "card card_medium"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Medicine'])}
                ><h4>Medicine</h4></div>
                <div className={interestArr.includes('Beauty') ? "card card_large_2" : "card card_large"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Beauty'])}
                ><h4>Beauty</h4></div>
                <div className={interestArr.includes('Humor') ? "card card_small_2" : "card card_small"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Humor'])}
                ><h4>Humor</h4></div>
                <div className={interestArr.includes('Motivation') ? "card card_medium_2" : "card card_medium"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Motivation'])}
                ><h4>Motivation</h4></div>
                <div className={interestArr.includes('Coding') ? "card card_large_2" : "card card_large"}
                    onClick={() => setInterestArr(oldArray => [...oldArray, 'Coding'])}
                ><h4>Coding</h4></div>
            </div>
            <div>
                <button
                    onClick={() => {
                        navigate('/');
                    }}
                    type="submit" className="btn btn-primary back">Back</button>
                <button
                    onClick={() => {
                        navigate('/otp');
                    }}
                    type="submit" className="btn btn-primary proceed">Proceed</button>
            </div>
            <div>
                <h3>Hey!{props.user.displayName}</h3>
            </div>
        </>
    )
}
export default Interests
