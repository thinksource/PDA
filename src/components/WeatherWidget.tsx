import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';
// const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//import Cloudy from "../assets/svgs/cloud.svg?icon";

import "./weatherwidget.css";
const appid ='9a9b783fcb1aab7172050d26fe9dd633';

interface JsonWeather {
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        country: string;
    };
    name:string;
}

interface APIError {
    cod: string,
    message: string
}
const WeatherWidget = (props:{location: string}) => {
    const [weatherData, setWeatherData] = useState<JsonWeather | {}>({});
    const [iconUrl, setIconUrl]=useState('');
    const [error, setError] = useState<APIError>({} as APIError);
    useEffect(() => {
        setError({} as APIError);
        if(props.location.length){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=${appid}`)
            .then(({ data }: { data: JsonWeather })=>{
                console.log(data);
                setWeatherData(data);
                if(data.weather[0]){
                setIconUrl(`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@4x.png`);
                }else{
                    setIconUrl('../assets/svgs/cloud.svg');
                }
            }).catch((error:any)=>{
                setIconUrl('../assets/svgs/cloud.svg');
                console.log("error: ", error);
                setError(error.response.data);
            })
        }
    },[props.location]);
    
    return (
        <>
        {error.message && <div className="error_message">Error:{error.message}</div>}
        <div className="weather-widget">
            <div><img src={iconUrl} className='weather-icon'></img></div>
            <div className="weather-info">temperature: {(weatherData.main?.temp-273.15).toFixed(2)} ℃</div>
            <div className='weather-info'>weather: {weatherData.weather?weatherData.weather[0].main:''}</div>
            <div className="weather-info">pressure: {weatherData.main?.pressure} hPa</div>
            <div className='weather-info'>location: {weatherData.name?weatherData.name:''}</div>
            <div className="weather-info">country: {weatherData.sys?.country}</div>
            <div className="weather-info">humidity: {weatherData.main?.humidity}%</div>
            <div className="weather-info">wind: {weatherData.wind?.speed} m/s {weatherData.wind?.deg}°</div>
        </div>
        </>
    );
}

export default WeatherWidget;
