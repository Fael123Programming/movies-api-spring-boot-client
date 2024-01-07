import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <div className='error-icon-container'>
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className='error-icon'
        />
      </div>
      <div className='not-found-container'>
          <h1>
            <strong>
              I'm sorry but this page could not be found
            </strong>
          </h1>
      </div>
    </>
  )
}

export default NotFound