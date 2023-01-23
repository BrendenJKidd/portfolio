import { useNavigate } from 'react-router-dom'
import jsVectorMap from 'jsvectormap'
import Back from '../components/Back'
import Map from '../components/Map'

function About() {

    const navigate=useNavigate()

    return (
      <div className="About">
        <Back />
        <h1 className="about-title">
          About
        </h1>
        <Map />
      </div>
    );
  }
  
  export default About;