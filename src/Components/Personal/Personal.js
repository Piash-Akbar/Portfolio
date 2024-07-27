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
              <p>I have an interest in Psychology, Mythology, Art and Poetry </p>


              <li><b>Walking</b></li>
              <p>I Love to Walk whenever I get some free time, as it clarifies my thoughts.</p>

            </ul>
          </div>
          </div>



        <Footer />
    </div>
  )
}

export default Personal