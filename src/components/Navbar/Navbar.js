import { useContext, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {ThemeContext} from '../../Context/Theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <Link
            smooth={true}
            duration={1000}
              to='aboutme'
              onClick={toggleNavList}
              className='link link--nav'
            >
              About Me
            </Link>
          </li>
        ) : null}
        {projects.length ? (
          <li className='nav__list-item'>
            <Link
              smooth={true}
              duration={1000}
              to='projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <Link
              smooth={true}
              duration={1000}
              to='skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </Link>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <Link
              smooth={true}
              duration={1000}
              to='contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
