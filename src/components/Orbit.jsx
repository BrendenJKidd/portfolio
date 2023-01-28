import { useNavigate } from 'react-router-dom'

function Orbit() {
    const navigate = useNavigate()

    const clickAbout = (e) => {
      if(e.target == e.currentTarget){
        e.stopPropagation()
    navigate('/portfolio/about')
        }}
    const clickWorks = (e) => {
    navigate('/portfolio/projects')
        }
    const clickContact = () => {
    navigate('/portfolio/contact')
        }

    return (
      <>
        <div class="planet">
            <h1>About</h1>
            <div class="planet-hover" onClick={ clickAbout }></div>
            <div class="moon1"  onClick={ clickWorks }>Projects</div>
            <div class="moon2"  onClick={ clickContact }>Contact</div>
        </div>
      </>
    );
  }
  
  export default Orbit;