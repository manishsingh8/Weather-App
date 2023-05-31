import React from "react";
const WeatherCard = ({ info }) => {
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

  const time = new Date().toLocaleTimeString();
  return (
    <>
      {/* temp card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-cloudy"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {city} {country}
            </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>

          {/* 4 devided section */}
          <div className="extra-temp">
            <div className="temp-info-minmax">
              <div className="two-sided-section">
                <p>
                  <i className="wi wi-night-sleet"></i>
                </p>
                <p className="extra-info-leftside">
                   {time}
                  <br />
                  {sunset}
                </p>
              </div>
              <div className="two-sided-section">
                <p>
                  <i className="wi wi-humidity"></i>
                </p>
                <p className="extra-info-leftside">
                {time}
                <br />
                  {humidity}
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
              {time}
                <br />
                {pressure}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
              {time}
                <br />
                {speed}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
