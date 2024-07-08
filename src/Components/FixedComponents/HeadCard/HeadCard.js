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
          <div className='CV'><a href="https://tangerine-hummingbird-1479b6.netlify.app/assets/resume-example.pdf" target='_blank'>cv</a></div>
        </div>
      </div>
    </div>
  )
}

export default HeadCard