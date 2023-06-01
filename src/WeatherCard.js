import React, { useEffect, useState } from "react";
const WeatherCard = ({ info }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    pressure,
    humidity,
    speed,
    country,
    sunset,
    city,
    weathermood,
  } = info;
  // converting the time
  let sec = sunset;
  let date = new Date(sec * 1000); //time in milisecods
  let time = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Rain":
          setWeatherState("wi-showers");
          break;
          case "Mist":
          setWeatherState("wi-dust");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  return (
    <>
      {/* temp card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`} style={{ fontSize: "90px" }}></i>
        </div>

        <div className="weatherInfo">
          <div className="country">
            <div className="temperature background">
              <span>{temp}&deg;</span>
            </div>
            <div className="description background ">
              <div className="weatherCondition">{weathermood}</div>
              <div className="place">
                {city} {country}
              </div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
          </div>
          {/* 4 devided section */}
          <div className="extra-temp">
            {/* <div className="temp-info-minmax"> */}
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {time}
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
            {/* </div> */}

            {/* <div className="weather-extra-info"> */}
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </article>
    </>
  );
};

export default WeatherCard;
