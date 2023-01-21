import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

function Back() {

    const navigate=useNavigate()
    
    const clickBack = () => {
        navigate('/')
    }

    return (
      <div className="Back">
        <h1 className="back-button" onClick={ clickBack }><FontAwesomeIcon icon={ faAnglesLeft } />Back to Home</h1>
      </div>
    );
  }
  
  export default Back;