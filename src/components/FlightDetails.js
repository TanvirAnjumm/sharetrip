import React from 'react';
import Vector from '../assets/Vector.png';

const FlightDetails = () => {
  return (
    <div className='middle-2'>
        <div><img src={Vector} alt="description" style={{ width: '21px', height: '23px', marginTop: '5px' }} /></div>
        <div className='middle-2-right'>
            <div className='middle-2-title'>
                DAC - DXB
            </div>
            <div className='middle-2-text'>
                12 hr 20 min
            </div>
        </div>
        <div className='middle-2-right'>
            <div className='middle-2-title'>
                07:30 PM
            </div>
            <div className='middle-2-text'>
                28 Mar, Friday
            </div>
        </div>
        <div className='middle-2-right'>
            <div className='middle-2-title'>
                08:50 AM
            </div>
            <div className='middle-2-text'>
                29 Mar, Saturday
            </div>
        </div>
    </div>
  );
};

export default FlightDetails;
