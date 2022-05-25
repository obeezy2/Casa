import '../src/assets/scss/main.scss';
import {Homepage} from './views/Homepage.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>
         Aircasa
        </h1>
      <div className='nav'>
        <p>home</p>
        <p>explore</p>
        <p>host</p>
        <p>login</p>
      </div>  
      </header>
      <Homepage /> 
    </div>
  );
}

export default App;
