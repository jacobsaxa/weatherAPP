export const GEO_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const GEO_OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_GEO_KEY,
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_KEY=process.env.REACT_APP_WEATHER_KEY

export const WEATHER_API_URL="https://api.openweathermap.org/data/2.5"
