import React from "react";
import { createContext, useState, useContext } from "react";

type WeatherContextType ={
    weather: string;
    changeWeather: () => void;
}
  
//export const WeatherContext = createContext(null);
//initialize the context with createContext(null), it is infered that the context value is null
//weathercontext is a context object that is created with the createContext function and its return value is weathercontexttype or null
//export const WeatherContext = createContext<WeatherContextType | null>(null);
export const WeatherContext = createContext<WeatherContextType | null>(null);

const Context = () => {
  const [weather, setWeather] = useState<"🌞"| "🌧️">("🌞");

  const changeWeather = () => setWeather("🌧️");

  return (
    <WeatherContext.Provider value={{ weather, changeWeather }}> 
      <Europe />
    </WeatherContext.Provider>
  );
};

const Europe = () => {
  return <Estonia />;
};

const Estonia = () => {
  return <Tallinn />;
};

const Tallinn = () => {
  //const { weather, changeWeather } = useContext(WeatherContext); 

  //return <div onClick={changeWeather}>{weather}</div>;
  const context = useContext(WeatherContext);
  
  if (!context) {
    // Handle the case where context is null
    return <div>Loading...</div>;
  }

  const { weather, changeWeather } = context;

  return <div onClick={changeWeather}>{weather}</div>;
};

export default Context;

// use map function to dynamically create buttons for +1 -1 -50

//map function to create buttons for +1 -1 -50
