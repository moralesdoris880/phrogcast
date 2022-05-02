function TodayCard({currentWeather}){
    console.log(currentWeather)
    return(
        <div>
            <div>
                <p>Today</p>
                <p>{currentWeather.region}</p>
                <p>{currentWeather.currentConditions.temp.f}° F</p>
            </div>
            <div>
                <p>Precipitation: {currentWeather.currentConditions.precip}</p>
                <p>Humidity: {currentWeather.currentConditions.humidity}</p>
                <p>Wind: {currentWeather.currentConditions.wind.mile} mph</p>
            </div>
            <div>
                <p>{currentWeather.currentConditions.dayhour}</p>
            </div>
        </div>
    );
}

export default TodayCard;