import React from 'react'
import './Home.css'
// import 'images.jpeg'
import HeadCard from '../FixedComponents/HeadCard/HeadCard'
import Footer from '../FixedComponents/Footer/Footer'
import Propic from '../../Images/Pro.png' 
const Head = () => {
  return (
    
    <div>
      <HeadCard
       PageTitle = 'Sk Nafis Akbar'
       works ='Student | Learner | Music Lover'
        cv =  {<div className='CV'><a href="https://drive.google.com/file/d/1t_1_SMyy5Sxllzp3k_7_xzNXBwrcWb1t/view" target='_blank' rel="noreferrer">cv</a></div>}
      />

      <div className="About-out">
        <div className="About">
            <img className='image' src={Propic} alt="NAI" />
          <div className='image-side'>
            <h3 className="title">Hi! I am Sk Nafis Akbar, a graduate from SUST, Sylhet.</h3> 
            <p>I was born in Khulna, home to the Sundarbans, the largest mangrove forest in the world, and raised in Dhaka, the vibrant capital of Bangladesh. My childhood was characterized by a deep curiosity about everything around me. I was particularly fascinated by how mechanical machines, computers, music, and almost everything in our world operate according to natural laws, which led me to major in Physics at university.</p>
            <p> In 2018, driven by an unquenchable thirst for knowledge, I began an extraordinary journey as an undergraduate student in the Department of Physics at Shahjalal University of Science and Technology (SUST) in Sylhet. Known for its natural beauty, unique dialect, and frequent rain, Sylhet provided an inspiring backdrop for my studies. SUST, the country's pioneering science and technology university, attracted me with its innovative academic environment.</p>
            <p> I consider my university years to be the best part of my life, as they were instrumental in shaping me into who I am today.</p>
          </div>
        </div>
      
      <div className="about-2">
       <div className='about-2-body'>
            <h3 className="title-2">Essence of my vision and works</h3> 
            <p>My career goal is to become a dedicated inventor and researcher, fueled by my passion for Machine Learning, Data Science, Digital Image Processing, Scientific Data Processing, and Website Development. I am eager to leverage my knowledge to develop innovative ideas and solutions. Throughout my career, I have worked on diverse projects such as measuring laser beam spot sizes and other features, conducting simulations with computer vision, and detecting skin cancer using machine learning. Additionally, I have developed this very portfolio website.</p>
            <p>By collaborating with multidisciplinary teams and dynamic individuals, I aim to conduct impactful research and contribute significantly to my field. My vision is to make a positive impact on people's lives through my work, driving advancements and fostering innovation. I am committed to continually expanding my expertise and staying at the forefront of technological advancements to achieve these goals.</p>
          </div>
      </div>
      </div>


      <div className="About-out">
        <div className="About">
            <img className='image' src={Propic} alt="NAI" />
          <div className='image-side'>
            <h3 className="title">Hi! I am Sk Nafis Akbar, a graduate researcher from SUST, Sylhet.</h3> 
            <p>I am a self-taught programmer, having acquired my skills through resources like Google, YouTube, Kaggle, and various other websites. My journey has been driven by an unrelenting passion for learning. One crucial lesson I took away from my university studies is that very few things on Earth can be as challenging as the mighty Quantum Mechanics. Jokes aside, this experience taught me that I can master any knowledge, no matter how difficult it may seem.</p>
            <p>I firmly believe in the sentiment expressed by Paulo Coelho in his book "The Alchemist," where he states, "And, when you want something, all the universe conspires in helping you to achieve it." This quote resonates deeply with me, as I have found that my determination and enthusiasm can overcome any obstacle. My learning journey has been a testament to this belief. From debugging complex code to understanding intricate algorithms, I have faced numerous challenges, but my passion for problem-solving and innovation has always fueled my perseverance.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>



    






  )
}

export default Head