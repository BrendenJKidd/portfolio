import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Back from '../components/Back'

function Contact() {

    return (
      <div className="contact">
        <Back/>
        <h1 className="contact-title">
         Contact
        </h1>
        <div className="contact-container">
            <h3 className="phone"><FontAwesomeIcon icon={ faPhone } /> +1 (813)-352-0804</h3>
            <h3 className="email"><FontAwesomeIcon icon={ faEnvelope } /> brendenjkidd@gmail.com</h3>
            <a href="https://github.com/BrendenJKidd" target="_blank">
              <h3 className="github"><FontAwesomeIcon icon={ faGithub } /> https://github.com/BrendenJKidd</h3>
            </a>
            <a href="www.linkedin.com/in/brenden-kidd-059720243" target="_blank">
              <h3 className="linked-in"><FontAwesomeIcon icon={ faLinkedin } /> www.linkedin.com/in/brenden-kidd-059720243</h3>
            </a>
        </div>
      </div>
    );
  }
  
  export default Contact;