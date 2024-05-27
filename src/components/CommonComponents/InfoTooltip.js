import React from 'react';
import locDis from '../../assets/locDis.png';
import loc from '../../assets/loc.png';

const InfoTooltip = ({leftText, rightText, rightHeadline='', bgColor='#F5F7FA', disableIcon=true}) => {
  return (
           <div className='middle-top'>
             {disableIcon ? <div><img src={locDis} alt="description" style={{ width: '24px', height: '24px', marginTop: '5px' }} /></div> :
             <div><img src={loc} alt="description" style={{ width: '13px', height: '18px', marginTop: '5px', marginLeft: '4px' }} /></div>}
             <div className='middle-top-right' style={{backgroundColor: `${bgColor}`}}>
                <div style={{color: '#1A2B3D'}}>{leftText}</div>
                <div style={{ display: 'flex' }}> <div style={{color: '#5A6573'}}>{rightHeadline}</div> <div style={{ fontWeight: 400, paddingLeft: '4px', color: '#5A6573' }}> {rightText} </div> </div>
             </div>
           </div>
  )

};

export default InfoTooltip;
