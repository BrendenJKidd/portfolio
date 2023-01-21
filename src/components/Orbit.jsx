import { useNavigate } from 'react-router-dom'

function Orbit() {
    const navigate = useNavigate()

    const clickAbout = (e) => {
      if(e.target == e.currentTarget){
        e.stopPropagation()
    navigate('/about')
        }}
    const clickWorks = (e) => {
    navigate('/works')
        }
    const clickContact = () => {
    navigate('/contact')
        }

    return (
      <>
        <div class="planet">
            <h1>About</h1>
            <div class="planet-hover" onClick={ clickAbout }></div>
            <div class="moon1"  onClick={ clickWorks }>Works</div>
            <div class="moon2"  onClick={ clickContact }>Contact</div>
        </div>
      </>
    );
  }
  
  export default Orbit;