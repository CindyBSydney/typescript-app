import React from "react";
import { useState } from "react";

type Weather = {
    weather: string;
};

const PropDrilling = () => {
  const [weather, setWeather] = useState(":sun_with_face:");

  return <Europe weather={weather} />;
};

const Europe = ({ weather }: Weather) => { 
  return <Estonia weather={weather} />;
};

const Estonia = ({ weather }: Weather ) => {
  return <Tallinn weather={weather} />;
};

const Tallinn = ({ weather }: Weather) => {
  return <div>{weather}</div>;
};

export default PropDrilling;