import React from 'react';
import Plane from '../assets/Plane.png';
import DangIcon from '../assets/dangIcon.png';

const AirlineInfo = () => {
  return (
    <div className='middle-3'>
        <div className="line-icon-container">
            <div className="line"></div>
            <div><img src={Plane} alt="description" style={{ width: '13px', height: '14px', marginTop: '5px' }} /></div>
            <div className="line"></div>
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

        <div className= 'tooltipIcon-container'>
            <div><img src={DangIcon} alt="description" style={{ width: '16.67px', height: '16.67px', marginTop: '5px' }} /></div>
            <div className='tooltip-text'> Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality</div>
        </div>
        </div>
    </div>
  );
};

export default AirlineInfo;
