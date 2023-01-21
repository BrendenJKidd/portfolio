import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import Landing from './pages/Landing'
import About from './pages/About'
import Works from './pages/Works'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= { <Landing />} />
          <Route path='/about' element={ <About />} />
          <Route path='/works' element={ <Works />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
