import './App.css'
import Homepage from './pages/Homepage'
import "@sergio/styleguide";

function App() {
  return (
    <div className="mfe-maincontent">
      <div className="row">
        <div className="col col-12">
          <main>
            <Homepage />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
