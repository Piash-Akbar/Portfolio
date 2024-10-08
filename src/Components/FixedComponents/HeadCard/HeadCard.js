import React from 'react'
import './HeadCard.css'

const HeadCard  = (props) => {
  return (
     <div>
      <div className="header">
        <div className="headerr">
          <div className='Name'>
            <div className='Name-2'>
            <h1>{props.PageTitle}</h1>
            <p>{props.works}</p>
            </div>
          </div>
          {props.cv}
        </div>
      </div>
    </div>
  )
}

export default HeadCard