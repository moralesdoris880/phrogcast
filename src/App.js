import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import TodayCard from './components/TodayCard';

function App() {
  const[currentWeather,setCurrentWeather]= useState([]);
  const[thisWeek,setThisWeek]= useState([]);
  const[city,setCity]= useState("newyork");

  useEffect(()=>{
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`,
    { headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
    .then(response => response.json())
    .then(data => {
      setCurrentWeather(data)
      setThisWeek(data.next_days)
      console.log(data)
    })
},[city]);


  return (
    <div className="App">
      <h1>Phrogcast</h1>
      <form>
        <input type="text" placeholder='Enter a City:' onChange={(e)=>setCity(e.target.value)}></input>
        <input type="submit" value="Submit"></input>
      </form>
      {currentWeather? <TodayCard currentWeather={currentWeather}/>: null}
      <div>
      {
        thisWeek.map((day)=> <WeatherCard day={day}/>)
      }
      </div>
    </div>
  );
}

export default App;

