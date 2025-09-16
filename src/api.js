
export const GEO_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const GEO_OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_GEO_KEY,
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(GEO_URL, GEO_OPTIONS);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}