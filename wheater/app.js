const apiKey = "ENTER_YOUR_API_KEY"; // Replace with your OpenWeather API key

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Construct the API URL for a given city
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function getWeatherByLocation(city) {
  try {
    const resp = await fetch(url(city));
    const respData = await resp.json();

    if (resp.ok) {
      addWeatherToPage(respData);
    } else {
      main.innerHTML = `<p>City not found. Please try again!</p>`;
    }
  } catch (error) {
    main.innerHTML = `<p>Unable to fetch weather data. Check your connection or try again later.</p>`;
    console.error(error);
  }
}

function addWeatherToPage(data) {
  const temp = Ktoc(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
    <h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" />
      ${temp}°C
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" />
    </h2>
    <small>${data.weather[0].main}</small>
  `;

  // Clear previous results and add new weather data
  main.innerHTML = "";
  main.appendChild(weather);
}

function Ktoc(K) {
  return Math.floor(K - 273.15); // Convert Kelvin to Celsius
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value.trim();

  if (city) {
    getWeatherByLocation(city);
    search.value = ""; // Clear the input field
  }
});
