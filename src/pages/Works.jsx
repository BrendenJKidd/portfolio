import { useNavigate } from 'react-router-dom'
import photoPage from '../photo-page.PNG'
import gameTracker from '../game-tracker.PNG'
import Back from '../components/Back'

function Works() {

    const navigate=useNavigate()

    const clickBack = () => {
        navigate('/')
    }

    return (
      <div className="Works">
        <Back />
        <h1 className="works-title">
          Projects
        </h1>
        <div className="sites">
            <div className="site1">
              <a href="https://brendenjkidd.github.io/gu_photo_app/" target="_blank">
                <img src={ photoPage } className="thumbnail"/>
              </a>
              <ul className="web-info">
                <li>Frontend React application</li>
                <li>Ability to use multiple filters to narrow down search</li>
                <li>Use of state to hide and reveal photos</li>
                <li>Use of state to enlarge photos</li>
                <li>Neat style that mimics a cork board and sticky notes</li>
              </ul>
            </div>
            <div className="site2">
              <a href="https://game-tracker2.onrender.com/" target="_blank">
                <img src={ gameTracker } className="thumbnail"/>
              </a>
              <ul className="web-info">
                <li>Fullstack MERN Application</li>
                <li>Ability to create an account and sign in</li>
                <li>CRUD API</li>
                <li>Ability for users to create and delete items</li>
                <li>Communicates with a server to store data created by the user</li>
                <li>Sort feature</li>
                <li>Filter feature</li>
                <li>Day/Night mode switch that communicates with browser and remembers preference</li>
              </ul>
            </div>
        </div>
      </div>
    );
  }
  
  export default Works;