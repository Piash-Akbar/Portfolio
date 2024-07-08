import React from 'react'
import HeadCard from '../FixedComponents/HeadCard/HeadCard'
import Footer from '../FixedComponents/Footer/Footer'

const Contact = () => {
  return (
    <div>
        <HeadCard
            PageTitle = 'Contact'
        />


        <div className='arbeit-out'>
          <div className="arbeit">
            <h3 className="arbeit-h3">Contact Informations</h3>
            <ul>
              <li><b>Email</b></li>
              <p>email@email.com</p>

              <li><b>Contact Number</b></li>
              <p>+8801515688304</p>

              {/* <li><b>Walking</b></li>
              <p>I Love to Walk at Rasta-Ghat,Jhor Jongol ittadi ittadi</p> */}

            </ul>
          </div>
          </div>



        <Footer />
    </div>
  )
}

export default Contact