import "./App.css";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

function App() {
  const [searchValue, setSearchValue] = useState("delhi");
  const[info,setInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e3cfc82aca73cd2d65ca02c82294a53f`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      const { temp ,  pressure,humidity} = data.main;
      const {speed} = data.wind;
      console.log(temp);
      console.log(speed);
      const weathermood = data.weather[0].main;
      const city = data.name;
      const { country ,sunset } = data.sys;

      const myNewWeatherInfo ={
        temp,
        pressure,
        humidity,
        speed,
        country,
        sunset,
        city,
        weathermood
      }
      setInfo(myNewWeatherInfo);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  

  return (
    <>
      {/* search bar */}
      <div className="main">
        <div className="inner">
          <div className="container">
            <div className="search">
              <input
                type="search"
                placeholder="search..."
                autoFocus
                id="search"
                className="searchTerm"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <button className="searchButton" onClick={getWeatherInfo}>
                Search
              </button>
            </div>
          </div>
          <WeatherCard info={info}/>
        </div>
      </div> 
      
    </>
  );
}

export default App;

// apis
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=e3cfc82aca73cd2d65ca02c82294a53f
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e3cfc82aca73cd2d65ca02c82294a53f
// https://erikflowers.github.io/weather-icons/
// fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e3cfc82aca73cd2d65ca02c82294a53f")
//       .then(response=>{
//           return response.JSON();
//        })
//        .then(data=>{
//         console.log(data);
//        })
//     }
