import React from 'react';
import Plane from '../assets/Plane.png';

const DepartureAirlineInfo = () => {
  return (
    <div className='middle-4'>
        <div className="line-icon-container">
            <div className="line2"></div>
            <div><img src={Plane} alt="description" style={{ width: '13px', height: '14px', marginTop: '5px' }} /></div>
            <div className="line2"></div>
        </div>
        <div className='middle-3-right'>
        <div className='middle-3-right-top'>
            <div className='middle-3-right-top-specific'>
               <div className='middle-3-title fw-475'>
                   Turkish Airlines
               </div>
               <div className='middle-3-title'>
                   Flight No : TUR467
               </div>
            </div>
            <div className='middle-3-right-top-specific'>
                 <div className='middle-3-title'>
                      Airbus Industrie 737-800-738
                 </div>
                 <div className='middle-3-title'>
                     Class : <div style={{color: '#5A6573', fontWeight: 475}}>ECONOMY-Y (O)</div>
                 </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default DepartureAirlineInfo;
