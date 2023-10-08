import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { about } from '../../portfolio'
import './About.css'
import {useTypewriter,Cursor } from 'react-simple-typewriter';
const About = () => {
  const { name, role, description,social } = about
  const [text] = useTypewriter({
    words:['Nicko Christian','just an average student in letris 2'],
    Cursor,
      typeSpeed:100,
      deleteSpeed:70,
      delaySpeed:4000,
    loop:true
  })
  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>
            {text}
            <Cursor/>
      </span> 
        </h1>
      )}

      {role && <h2 className='about__role'>A {role} .</h2>}
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
