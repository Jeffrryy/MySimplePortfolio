import { contact } from '../../portfolio'
import './Contact.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  if (!contact.email) return null
  
  if (!contact.whatsapp) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
        <EmailIcon className='iconContactEmail iconHover'/>
      </a>
      <a href={`${contact.whatsapp}`}>
        <span type='button' className='btn btn--outline'>
          My Whatsapp   
      
        </span>
        <WhatsAppIcon defaultValu={30} className='iconContact iconHover'/>
      </a>

    </section>
  )
}

export default Contact
