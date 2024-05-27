import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BreadCrumb = () => {
  const breadcrumbItems = [
    { label: 'Home' },
    { label: 'Booking History' },
    { label: 'Flight' },
    { label: 'STFL1721182045413' },
  ];

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === breadcrumbItems.length - 1 ? 'active' : ''}`}>
            {item.label} {index < breadcrumbItems.length - 1 && <FontAwesomeIcon icon={faChevronRight} size='xs' />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
