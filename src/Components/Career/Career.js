import React from 'react'
import HeadCard from '../FixedComponents/HeadCard/HeadCard'
import Footer from '../FixedComponents/Footer/Footer'
import './Career.css'

const Career = () => {
  return (
    <div>
        <HeadCard
            PageTitle = 'Expertise'
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
            <p></p>
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
            <p>I participated the UPC 2018 Competition and achieved Paper accomplished rank</p>

            <li><b>Astronomy: Exploring Time and Space</b></li>
            <p>This course was my first course on Astronomy and I started to love the subject more intensely.</p>

            <li><b>Data-driven Astronomy</b></li>
            <p>This was the course provided by Coursera and in this course, I completed many exercises on astronomical data.</p>

            <li><b>Programming for Everybody (Getting Started with
              Python)</b></li>
            <p>This was the course with which I got started with programming with Python.</p>

            <li> Certificate of participation at <b>International Observe the Moon Night</b> arranged by Nasa</li>
            <p>We registered for the competition organized by NASA and submitted some images of the moon captured with telescope on a full moon night.</p>




          </ul>
        </div>
      </div>




      </div>

  <Footer />
</div>
  )
}

export default Career