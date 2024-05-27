import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import FlightDetails from './FlightDetails.js'
import AirlineInfo from './AirlineInfo.js'
import InfoTooltip from './CommonComponents/InfoTooltip.js'
import DepartureAirlineInfo from './DepartureAirlineInfo.js'

const BottomBox = () => {
  return (
     <div className="bottom-box">
        <div className="top-portion">
                <div className='circle'>
                  1
                </div>
                <div className='middle-content'>
                    <div className='textStyle'>DAC <FontAwesomeIcon icon={faArrowRight} /> JFK</div>
                    <div className='subTextStyle'>
                        Round Trip
                        <FontAwesomeIcon icon={faCircle} className="dot"/>
                        25 Mar - 4 Apr 2023
                        <FontAwesomeIcon icon={faCircle} className="dot"/>
                        1 Stop
                    </div>
                </div>
                <div className='tooltip'>33h 20m</div>
        </div>
        <div className='middle-portion'>
        <InfoTooltip
            leftText={'Departure from Dhaka'}
            rightText={'Hazrat Shahjalal International Airport'}
            rightHeadline={'Terminal 1 : '}
        />
        <FlightDetails/>
        <AirlineInfo/>
        <InfoTooltip
           leftText={'Layover at Dubai: 12hr 20 min'}
           rightText={'Dubai International Airport'}
           bgColor='#E8F3FF'
        />
        <FlightDetails/>
        <DepartureAirlineInfo/>
        <InfoTooltip
           disableIcon={false}
           leftText={'Destination at New York'}
           rightText={'John F Kennedy International Airport'}
           rightHeadline={'Terminal 4 : '}
        />
        </div>
     </div>
  )

};

export default BottomBox;
