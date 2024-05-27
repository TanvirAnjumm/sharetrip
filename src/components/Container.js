import React from 'react';
import BreadCrumb from './BreadCrumb.js'
import BottomBox from './BottomBox.js'

const Container = () => {
  return (
        <div>
          <div className="top-whitespace-container">
            <div className="top-whitespace"></div>
          </div>
          <div className="content">
            <div>
               <div className="empty-sidebar">
               </div>
            </div>
            <div className='app-container'>
               <BreadCrumb/>
               <BottomBox/>
            </div>
          </div>
        </div>
  );
};

export default Container;
