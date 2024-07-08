import React from 'react'
import HeadCard from '../FixedComponents/HeadCard/HeadCard'
import Footer from '../FixedComponents/Footer/Footer'

const Personal = () => {
  return (
    <div>
        <HeadCard
            PageTitle = 'Personal'
        />


          <div className='arbeit-out'>
          <div className="arbeit">
            <h3 className="arbeit-h3">Personal | Hobbies and Interests </h3>
            <ul>
              <li><b>MUSIC</b></li>
              <p>I Have been Learning Indian Classical Music (on Violin) since 2017</p>

              <li><b>Reading</b></li>
              <p>I have an interest in psychology, Mythology and bla bla</p>


              <li><b>Walking</b></li>
              <p>I Love to Walk at Rasta-Ghat,Jhor Jongol ittadi ittadi</p>

            </ul>
          </div>
          </div>



        <Footer />
    </div>
  )
}

export default Personal