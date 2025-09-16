export const GEO_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
export const GEO_OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '272e7149d1msh753d7580f21e68ep173ab6jsn0c0cf1e0c37a',
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