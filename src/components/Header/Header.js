import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import LogoLetris from '../../assets/letrisLogo.png'
const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
           
             <a href={homepage} className='link'>
          {title}
        </a> 
        
         
        ) : (
          
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
