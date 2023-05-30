import "./App.css";

function App() {
  return (
    <>
        {/* search bar */}
      <div className="container">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
          />
          <button className="searchButton">Search</button>
        </div>
      </div>

      {/* temp card */}
      <artical className="widget">
        <div className="weatherIcon">
          <i className={"wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">Delhi India</div>
          </div>

          <div className="date">{new Date().toLocaleString()}</div>

          {/* 4 devided section */}
          <div className="extra-temp">
            <div className="temp-info-minmax">
              <div className="two-sided-section">
                <p>
                <i class="wi wi-night-sleet"></i>
                </p>
                <p className="extra-info-leftside">
                  19:19 PM <br />
                  Sunset
                </p>
              </div>
              <div className="two-sided-section">
                <p>
                  <i className="wi wi-humidity"></i>
                </p>
                <p className="extra-info-leftside">
                  19:19 PM <br />
                  Humidity
                </p>
              </div>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className=" wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br />
                Humidity
              </p>
            </div>
          </div>
        </div>
      </artical>
    </>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=e3cfc82aca73cd2d65ca02c82294a53f
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e3cfc82aca73cd2d65ca02c82294a53f
