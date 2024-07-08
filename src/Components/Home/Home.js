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
      />

      <div className="About-out">
        <div className="About">
            <img className='image' src={Propic} alt="NAI" />
          <div className='image-side'>
            <h3 className="title">Hi! I am Sk Nafis Akbar, a graduate researcher from SUST, Sylhet.</h3> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis reprehenderit itaque ipsum quisquam doloremque necessitatibus quibusdam quos. Velit recusandae cupiditate ipsam placeat. Incidunt, autem ipsam fugiat recusandae sapiente, maiores earum voluptatibus ut molestiae quasi eum sed iure quis minus consequuntur porro possimus, rerum veniam ad libero praesentium culpa ex dolorum? Fugiat suscipit aliquam facilis unde qui ipsam dignissimos culpa velit eum repellat sequi, laudantium officiis. Quia, eius accusantium vero dignissimos et exercitationem doloribus saepe corporis cum quis cupiditate laboriosam, perferendis architecto qui voluptate totam eos recusandae accusamus velit rerum reprehenderit labore nihil quae excepturi? Nobis ea repudiandae officia, consequatur nulla cum, similique, soluta expedita inventore iste quis tenetur officiis magnam veniam! Reprehenderit doloribus, voluptates fugiat quasi doloremque cumque provident nihil fuga! Nostrum maiores dolorum architecto iure non, quo asperiores odit error similique accusantium perspiciatis laudantium aliquam provident modi quas molestiae optio veniam assumenda minus ipsa earum labore. Expedita dolorem, blanditiis non ut iusto at, consectetur distinctio quibusdam provident soluta vel dolorum pariatur! Reiciendis ipsam molestias expedita, quasi error ad vero nisi autem quibusdam? Perspiciatis a ipsum voluptas nihil, fuga consequatur pariatur dignissimos temporibus, ullam, doloremque quae maiores aliquam. Vero et rem natus ex, ad incidunt unde enim maxime ratione.</p>
          </div>
        </div>
      </div>

      <div className="about-2">
       <div className='about-2-body'>
            <h3 className="title-2">Hi! I am Sk Nafis Akbar, a graduate researcher from SUST, Sylhet.</h3> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis reprehenderit itaque ipsum quisquam doloremque necessitatibus quibusdam quos. Velit recusandae cupiditate ipsam placeat. Incidunt, autem ipsam fugiat recusandae sapiente, maiores earum voluptatibus ut molestiae quasi eum sed iure quis minus consequuntur porro possimus, rerum veniam ad libero praesentium culpa ex dolorum? Fugiat suscipit aliquam facilis unde qui ipsam dignissimos culpa velit eum repellat sequi, laudantium officiis. Quia, eius accusantium vero dignissimos et exercitationem doloribus saepe corporis cum quis cupiditate laboriosam, perferendis architecto qui voluptate totam eos recusandae accusamus velit rerum reprehenderit labore nihil quae excepturi? Nobis ea repudiandae officia, consequatur nulla cum, similique, soluta expedita inventore iste quis tenetur officiis magnam veniam! Reprehenderit doloribus, voluptates fugiat quasi doloremque cumque provident nihil fuga! Nostrum maiores dolorum architecto iure non, quo asperiores odit error similique accusantium perspiciatis laudantium aliquam provident modi quas molestiae optio veniam assumenda minus ipsa earum labore. Expedita dolorem, blanditiis non ut iusto at, consectetur distinctio quibusdam provident soluta vel dolorum pariatur! Reiciendis ipsam molestias expedita, quasi error ad vero nisi autem quibusdam? Perspiciatis a ipsum voluptas nihil, fuga consequatur pariatur dignissimos temporibus, ullam, doloremque quae maiores aliquam. Vero et rem natus ex, ad incidunt unde enim maxime ratione.</p>
          </div>
      </div>


      <div className="About-out">
        <div className="About">
            <img className='image' src={Propic} alt="NAI" />
          <div className='image-side'>
            <h3 className="title">Hi! I am Sk Nafis Akbar, a graduate researcher from SUST, Sylhet.</h3> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis reprehenderit itaque ipsum quisquam doloremque necessitatibus quibusdam quos. Velit recusandae cupiditate ipsam placeat. Incidunt, autem ipsam fugiat recusandae sapiente, maiores earum voluptatibus ut molestiae quasi eum sed iure quis minus consequuntur porro possimus, rerum veniam ad libero praesentium culpa ex dolorum? Fugiat suscipit aliquam facilis unde qui ipsam dignissimos culpa velit eum repellat sequi, laudantium officiis. Quia, eius accusantium vero dignissimos et exercitationem doloribus saepe corporis cum quis cupiditate laboriosam, perferendis architecto qui voluptate totam eos recusandae accusamus velit rerum reprehenderit labore nihil quae excepturi? Nobis ea repudiandae officia, consequatur nulla cum, similique, soluta expedita inventore iste quis tenetur officiis magnam veniam! Reprehenderit doloribus, voluptates fugiat quasi doloremque cumque provident nihil fuga! Nostrum maiores dolorum architecto iure non, quo asperiores odit error similique accusantium perspiciatis laudantium aliquam provident modi quas molestiae optio veniam assumenda minus ipsa earum labore. Expedita dolorem, blanditiis non ut iusto at, consectetur distinctio quibusdam provident soluta vel dolorum pariatur! Reiciendis ipsam molestias expedita, quasi error ad vero nisi autem quibusdam? Perspiciatis a ipsum voluptas nihil, fuga consequatur pariatur dignissimos temporibus, ullam, doloremque quae maiores aliquam. Vero et rem natus ex, ad incidunt unde enim maxime ratione.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>



    






  )
}

export default Head