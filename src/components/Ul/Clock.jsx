import React, { useEffect, useState } from 'react'
import '../../style/Clock.css'
const Clock = ({ duration }) => {
    const [time , setTime ] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        } , 1000)
    } , [time])
   
    const geFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return ( 
        <div className="clock__wrapper d-flex align-items-center gap-3">

         <div className="clock-data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3  mb-2'>{days}</h1>
                <h5 className='text-white fs-6'>days</h5>
            </div>
            <span className="text-white fs-3">:</span>
          </div>
          
          <div className="clock-data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3  mb-2'>{hours}</h1>
                <h5 className='text-white fs-6'>hours</h5>
            </div>
            <span className="text-white fs-3">:</span>
        </div>
        
        <div className="clock-data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3  mb-2'>{minutes}</h1>
                <h5 className='text-white fs-6'>minutes</h5>
            </div>
            <span className="text-white fs-3">:</span>
        </div>

        <div className="clock-data d-flex align-items-center gap-3">
            <div className='text-center'>
                <h1 className='text-white fs-3  mb-2'>{seconds}</h1>
                <h5 className='text-white fs-6'>seconds</h5>
            </div>

        </div>

        </div>
        )
    }


  return (
    <>
      {geFormattedTime(time)}
  </>
  )
}

export default Clock