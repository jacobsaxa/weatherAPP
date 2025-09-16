import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Chicago</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temperature">85°</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-label">78°</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-label">25 mph</span>
                    </div>
                     <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-label">60%</span>
                    </div>
                     <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-label">10hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;