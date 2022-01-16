import React from 'react'
import './Progress.css'
const Progress = (props) => {
    console.log(props.pageNo);
    return (
        <>
        <div className='bar'>
            <div className={`filler_${props.pageNo}`}></div>
        </div>
        </>
    )
}

export default Progress
