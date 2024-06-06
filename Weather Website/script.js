const submit = document.querySelector('form');

async function api(city) {
  const cityname = document.getElementById('cityname');
  const temp = document.getElementById('temp');
  const humidity = document.getElementById('humidity');
  const min_temp = document.getElementById('min_temp');
  const max_temp = document.getElementById('max_temp');
  const weatherIcon = document.getElementById('weather-icon');

  cityname.innerHTML = city;
  
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '06a4a5956bmsh6f570dcc6d5f55cp1cf67fjsn56922e2a0573',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
        
    temp.innerHTML = result.temp;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;

    // Assuming the API provides a weather icon code
    // You might need to adjust this part based on the actual API response
    const iconCode = result.icon; 
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.style.display = 'block';

  } catch (error) {
    console.error(error);
    alert('An error occurred while fetching the weather data.');
  }
}

// Initial weather data for a default city
api("Bangalore");

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  if (city) {
    api(city);
  }
});
