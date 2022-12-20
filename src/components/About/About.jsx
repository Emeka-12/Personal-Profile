import React from 'react'
import './about.css'

const About = () => {
  return (
    <section>
        <div className="container about_container">
            <div className='t'>
                <h3 className='h3'>About Me</h3>
                <div className="about"></div>
            </div>
            <div className='about_text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga illo magni minima doloribus at, quidem eligendi ad laudantium ullam vero laborum libero neque corporis doloremque obcaecati, amet deserunt consectetur?</p>
                <a href="dgy" className='btn link_space'>HIRE ME</a>
                <a href="dgy" className='btn btn-other'>LET'S TALK</a>
            </div>
        </div>
    </section>
  )
}

export default About
