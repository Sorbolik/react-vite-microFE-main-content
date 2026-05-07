import './App.css'
import About from './pages/about/About';
import Homepage from './pages/Homepage'
import "@sergio/styleguide";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="mfe-maincontent">
      <div className="row">
        <div className="col col-12">
          <main className='main-content-routes'>
            <BrowserRouter basename="/">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
