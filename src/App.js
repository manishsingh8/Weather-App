
import './App.css';

function App() {
  return (
    <>
     <div className="container">
      <div className='search'>
          <input type="search" 
          placeholder='search..'
          autoFocus
          id="search"
          className='searchTerm'
          />
      </div>
     </div>
    </>
  );
}

export default App;


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=e3cfc82aca73cd2d65ca02c82294a53f
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e3cfc82aca73cd2d65ca02c82294a53f