import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {DiJavascript1} from 'react-icons/di'
import {RiReactjsFill} from 'react-icons/ri'

const Experience = () => {
  return (
    <section className='experience_container'>
      <div className="container">
      <h3 className='h3_2'>Experience</h3>
      <div className='about about_2'></div>

      <div className="experiences">
      <div className="frontend">
          <h4>Frontend</h4>
          <div className="grid">
          <article>
          <AiOutlineHtml5  className='increase'/>
          <p> ~ Experienced</p>
          </article>
          <article>
          <TbBrandCss3  className='increase'/>
          <p> ~ Experienced</p>
          </article>
          <article>
          <DiJavascript1 className='increase'/>
          <p> ~ Beginner</p>
          </article>
          <article>
          <RiReactjsFill className='increase'/>
          <p> ~ Beginner</p>
          </article>
          </div>
        </div>
        {/* ---End of Frontend--- */}
        <div className="backend">
           <h4>Backend</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quis! A, amet quis omnis sit, quod ipsam alias modi quae error blanditiis ad veritatis minima quisquam autem atque distinctio. Aspernatur!</p>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience
