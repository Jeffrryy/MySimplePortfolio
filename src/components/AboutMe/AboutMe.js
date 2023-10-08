import React from 'react'
import {aboutme} from '../../portfolio'
import './AboutMe.css'

const AboutMe = () => {
    const {intro,experiences} = aboutme;
    
  return (
    <section id='aboutme'>
            <div className='  title'>
        <h1 className='title__About'>About Me</h1>
        {intro && (                      
                          <div>
                             <p className='aboutme__desc'>{intro}</p>
                          </div>                   
        )}

                                                      
    </div>
    </section>
  
  )
}

export default AboutMe