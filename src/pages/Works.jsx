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
          Works
        </h1>
        <div className="sites">
            <div className="site1">
              <a href="https://brendenjkidd.github.io/gu_photo_app/" target="_blank">
                <img src={ photoPage } className="thumbnail"/>
              </a>
              <p className="web-info">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="site2">
              <a href="https://game-tracker2.onrender.com/" target="_blank">
                <img src={ gameTracker } className="thumbnail"/>
              </a>
              <p className="web-info">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Works;