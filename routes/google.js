const router = require("express").Router();
const API_KEY = process.env.GOOGLEBOOKS_API_KEY || process.env.API_KEY ;


router.get('/google:query', async (request, response) => {
    console.log(request.params);
    const q = request.params.query;
    const search_url = `https://www.googleapis.com/books/v1/books?q=${q}=${API_KEY}`;
    console.log (search_url)
    const weather_response = await fetch(search_url);
    const weather_data = await weather_response.json();
  
    const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
    const aq_response = await fetch(aq_url);
    const aq_data = await aq_response.json();
  
    const data = {
      weather: weather_data,
      air_quality: aq_data
    };
    response.json(data);
  });

module.exports = router;