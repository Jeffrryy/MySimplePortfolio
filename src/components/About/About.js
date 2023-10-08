import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { about } from '../../portfolio'
import './About.css'
import {useTypewriter,Cursor } from 'react-simple-typewriter';
const About = () => {
  const { name, role, description,social } = about
  const [text] = useTypewriter({
    words:['A student in SMK Letris Indonesia 2','A 16 y.o that like to do nothing while theres nothing to do'],
    Cursor,
      typeSpeed:50,
      deleteSpeed:40,
      delaySpeed:1000,
    loop:true
  })
  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>
            {name}
            
      </span> 
        </h1>
      )}

       <h2 className='about__role'> {text} <Cursor/> </h2>
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
      

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.Instagram && (
              <a
                href={social.Instagram}
                aria-label='linkedin'
                className='link link--icon'
              >
                <InstagramIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
