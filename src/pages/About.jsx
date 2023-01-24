import { useNavigate } from 'react-router-dom'
import jsVectorMap from 'jsvectormap'
import Back from '../components/Back'
import Map from '../components/Map'
import headShot from '../head_shot.jpg'

function About() {

    const navigate=useNavigate()

    return (
      <div className="About">
        <Back />
        <h1 className="about-title">
          About
        </h1>
        <div className="about-intro">
          <img src={ headShot } className="head-shot"/>
          <div className="introText">
          <p className="summary">Hello World! I'm Brenden Kidd. I'm a non-denomational believer who believes in helping others and has always dreamed of adventure. My current dream is to move to Japan and to have a home and community there. To accomplish my goals I've taken up web development as a means to sustainably support myself anywhere in the world my travels may take me.</p>
          <p className="summary">Below is a map and timeline of my journeys</p>
          </div>
        </div>
        <Map />
      </div>
    );
  }
  
  export default About;