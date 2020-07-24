import axios from 'axios'
import {KEY} from './key.js'
export const FETCH_WEATHER = "FETCH_WEATHER"

const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${KEY}`;

function fetchWeather(city) {
    const url = `${URL}&q=${city}`;
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export default fetchWeather
