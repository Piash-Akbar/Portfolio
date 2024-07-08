import React from 'react'
import HeadCard from '../FixedComponents/HeadCard/HeadCard'
import Footer from '../FixedComponents/Footer/Footer'

const Academic = () => {
  return (
    <div>
        <HeadCard
            PageTitle = 'Academic'
        />

        <div className='arbeit-out'>
        <div className="arbeit">
          <h3 className="arbeit-h3">Academics</h3>
          <ul>
          <li><b>MSc in Physics</b> at Shahjalal University of Science and Technology </li>
          <p><b>(Noivember 2019 - January 2020)</b></p>

            <li><b>BSc in Physics</b> at Shahjalal University of Science and Technology</li>
            <p><b>(October 2023 - January 2024)</b></p>


            <li><b>Higher Secondary School Certificate (HSC)</b> at Dhaka Board </li>
            <p><b>(October 2023 - January 2024)</b></p>

          </ul>
        </div>
        </div>



        <Footer />
    </div>
  )
}

export default Academic