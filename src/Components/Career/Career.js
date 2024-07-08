import React from 'react'
import HeadCard from '../FixedComponents/HeadCard/HeadCard'
import Footer from '../FixedComponents/Footer/Footer'
import './Career.css'

const Career = () => {
  return (
    <div>
        <HeadCard
            PageTitle = 'Experties'
        />

      <div className='arbeit-out'>
        <div className="arbeit">
          <h3 className="arbeit-h3">Professional Experiences</h3>
          <ul>
            <li><b>Lecturer in Physics</b> at Universal College, Sylhet</li>
            <p><b>(October 2023 - January 2024)</b></p>
            <li><b>Machiene Learning Educator</b> at Eradupy </li>
            <p><b>(October 2023 - January 2024)</b></p>
            <li><b>Music Teacher(Violin)</b> at Siren Music School </li>
            <p><b>(Noivember 2019 - January 2020)</b></p>
            <p>responsibility: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, autem!</p>
          </ul>
        </div>
      </div>


      <div className='experties-out'>

        <div className="experties">
          <h3 className="arbeit-h3">Experties</h3>
          <ul>
            <li><b>Website Development</b>
              <ul>
                <li><b>HTML</b></li>
                <li><b>CSS</b></li>
                <li><b>JavaScript</b></li>
                <li><b>React JS</b></li>
                <li><b>Next JS</b></li>
              </ul>
            
            </li>
            
            <li><b>Python </b> 
              <ul>
                <li><b>SciPy</b></li>
                <li><b>NumPy</b></li>
                <li><b>OpenCV</b></li>
                <li><b>Pandas</b></li>
                <li><b>ScikitLearn</b></li>
                <li><b>PyTorch</b></li>

              </ul>
             </li>
          </ul>
        </div>

        <div className='arbeit-out'>

        <div className="arbeit">
          <h3 className="arbeit-h3">Online Courses and Certificates</h3>
          <ul>

            <li><b>The 2018 University Physics Competition</b></li>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

            <li><b>Astronomy: Exploring Time and Space</b></li>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

            <li><b>Data-driven Astronomy</b></li>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

            <li><b>Programming for Everybody (Getting Started with
              Python)</b></li>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

            <li> Certificate of participation at <b>International Observe the Moon Night</b> arranged by Nasa</li>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>




          </ul>
        </div>
      </div>




      </div>

  <Footer />
</div>
  )
}

export default Career