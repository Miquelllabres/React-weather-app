import axios from 'axios';

const API_KEY = '6de382997afaf4ceaf5b6624bd0c955a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},us`; 
	const request = axios.get(url);

	// console.log( 'Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

