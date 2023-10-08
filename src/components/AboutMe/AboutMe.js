import React from 'react'
import {aboutme} from '../../portfolio'
import './AboutMe.css'

const AboutMe = () => {
    const {intro,hobby} = aboutme;
    
  return (
    <section id='aboutme'>
            <div className='  title'>
        <h1 className='title__About'>About Me</h1>
        {intro && (                      
                          <div>
                             <p className='aboutme__desc'>{intro}</p>
                          </div>                   
        )}
        {hobby && (                      
                          <div>
                             <p className='aboutme__desc'>{hobby}</p>
                             <h2 className='titleML'>My Mobile Legend</h2>
                             <div className='aboutme_desc'>
                             <p>Nickname:Jeffryy</p>
                             <p>ID:133650430(2668)</p>
                             </div>
                            
                          </div>                   
        )}

                                                      
    </div>
    </section>
  
  )
}

export default AboutMe